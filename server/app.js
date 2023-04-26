const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

// ****************** Create connection *****************
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db4'
});

// ****************** Connect database *****************
con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected ...');
})

const app = express();
const port = 3003;

// ****************** Use dependencies *****************
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// ****************** Get, Update, Delete CONTAINERS *****************
// get all CONTAINERS and GOODS
app.get('/containers', (req, res) => {
    const sql = `SELECT * FROM containers RIGHT JOIN goods ON containers.good_id = goods.id
        ORDER BY containers.type ASC`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ data: result });
    });
});
// change CONTAINER type
app.put('/container/:id', (req, res) => {
    const sql = `UPDATE containers SET type = IF(type = 1, 0, 1) WHERE id = ?`;
    const params = [req.params.id];
    con.query(sql, params, (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Konteinerio statusas pakeistas.' }
        });
    });
});
// delete CONTAINER
app.delete('/container:id', (req, res) => {
    const sql = `DELETE FROM containers WHERE id = ?`;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Konteineris panaikintas.' }
        });
    });
});

// ****************** Get, Update, Delete GOODS *****************
// get all goods
app.get('/goods', (req, res) => {
    const sql = `SELECT id, title, weight, flammable, perishable FROM goods`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
// get one good by id
app.get('/goods/:id', (req, res) => {
    const sql = `SELECT id, title, weight, flammable, perishable FROM goods WHERE id = ?`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
// create a new good
app.post('/goods', (req, res) => {
    const sql = `INSERT INTO goods (title, weight, flammable, perishable) VALUES (?, ?, ?, ?)`;
    con.query(sql, [req.body.title, req.body.weight, req.body.flammable, req.body.perishable], (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'New cargo item was created.' }
        });
    });
});
// edit good by its id
app.put('/goods/:id', (req, res) => {
    let sql = `UPDATE goods SET title = ?, weight = ?, flammable = ?, perishable = ? WHERE id = ?`;
    con.query(sql, [req.body.title, req.body.weight, req.body.flammable, req.body.perishable, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({
            message: { text: 'The cargo item was updated.' }
        });
    });
});
// delete good by its id
app.delete('/goods/:id', (req, res) => {
    const sql = `SELECT id FROM goods WHERE id = ?`;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        const sql = `DELETE FROM goods WHERE id = ?`;
        con.query(sql, [req.params.id], (err) => {
            if (err) throw err;
            res.json({
                message: { text: 'The cargo item was deleted.' }
            });
        });
    })
});

// ****************** Get, Update, Delete USERS *****************
// user register
app.post('/register', (req, res) => {
    const sql = `INSERT INTO users (name, psw) VALUES (?, ?)`;
    const hashedPsw = md5(req.body.psw);
    con.query(sql, [req.body.name, hashedPsw], (err, result) => {
        if (err) throw err;
        res.json({
            status: 'ok',
        });
    });
});
// login user
app.post('/login', (req, res) => {
    const sessionId = uuidv4();
    const sql = `UPDATE users SET session = ? WHERE name = ? AND psw = ?`;
    con.query(sql, [sessionId, req.body.name, md5(req.body.psw)], (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            res.cookie('CargoSession', sessionId);
            res.json({
                status: 'ok',
                name: req.body.name,
            });
        } else {
            res.json({
                status: 'error',
            });
        }
    });
});
// get logged user
app.get('/login', (req, res) => {
    const sql = `SELECT name, role FROM users WHERE session = ?`;
    con.query(sql, [req.cookies.CargoSession || ''], (err, result) => {
        if (err) throw err;
        if (result.length) {
            res.json({
                status: 'ok',
                name: result[0].name,
                role: result[0].role,
            });
        } else {
            res.json({
                status: 'error',
            });
        }
    });
});
// logout user
app.post('/logout', (req, res) => {
    res.clearCookie('CargoSession');
    res.json({
        status: 'logout',
    });
});

// ****************** Get, Update, Delete MANAGERS *****************
// get all managers
app.get('/managers', (req, res) => {
    const sql = `SELECT id, name, role FROM users`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// edit manager
app.put('/manager/:id', (req, res) => {
    let sql = `UPDATE users SET name = ?, role = ? WHERE id = ?`;
    con.query(sql, [req.body.name, req.body.role, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({
            message: { text: 'The manager data was updated.' }
        });
    });
});
// delete manager
app.delete('/manager/:id', (req, res) => {
    const sql = `SELECT id FROM users WHERE id = ?`;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        const sql = `DELETE FROM users WHERE id = ?`;
        con.query(sql, [req.params.id], (err) => {
            if (err) throw err;
            res.json({
                message: { text: 'The manager was deleted.' }
            });
        });
    })
});

// ****************** App Listen On Port *****************
app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});