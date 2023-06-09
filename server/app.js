const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const fs = require('fs');
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
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

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
// get all CONTAINERS
app.get('/containers', (req, res) => {
    const sql = ` SELECT cont_id, cont_title, cont_type FROM containers`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ data: result });
    });
});

// create a new CONTAINER
app.post('/containers', (req, res) => {
    const sql = `INSERT INTO containers (cont_title, cont_type) VALUES (?, ?)`;
    con.query(sql, [req.body.cont_title, req.body.cont_type], (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'New container was created.' }
        });
    });
});

// change CONTAINER type
app.put('/container/:id', (req, res) => {
    const sql = `UPDATE containers SET cont_type = ? WHERE cont_id = ?`;
    const params = [req.body.cont_type, req.params.id];
    con.query(sql, params, (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'The container type was changed.' }
        });
    });
});

// delete CONTAINER
app.delete('/container/:cont_id', (req, res) => {
    const sql = `DELETE FROM containers WHERE cont_id = ?`;
    con.query(sql, [req.params.cont_id], (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'The container was deleted.' }
        });
    });
});

// ****************** Get, Update, Delete GOODS *****************
// get all goods
app.get('/goods', (req, res) => {
    const sql = `SELECT id, title, weight, photo, flammable, container_id FROM goods ORDER BY title desc`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
// get one good by id
app.get('/goods/:id', (req, res) => {
    const sql = `SELECT id, title, weight, photo, flammable FROM goods WHERE id = ?`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
// create a new good
app.post('/goods', (req, res) => {

    let fileName = null;

    if (req.body.file !== null) {

        let type = 'unknown';
        let file;

        if (req.body.file.indexOf('data:image/png;base64,') === 0) {
            type = 'png';
            file = Buffer.from(req.body.file.replace('data:image/png;base64,', ''), 'base64');
        } else if (req.body.file.indexOf('data:image/jpeg;base64,') === 0) {
            type = 'jpg';
            file = Buffer.from(req.body.file.replace('data:image/jpeg;base64,', ''), 'base64');
        } else {
            file = Buffer.from(req.body.file, 'base64');
        }

        fileName = uuidv4() + '.' + type;

        fs.writeFileSync('./public/' + fileName, file);
    }

    const sql = `INSERT INTO goods (title, weight, photo, flammable, container_id) VALUES (?, ?, ?, ?, ?)`;
    con.query(sql, [req.body.title, req.body.weight, fileName, req.body.flammable, req.body.container_id], (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'New cargo item was created.' }
        });
    });
});
// edit good by its id
app.put('/goods/:id', (req, res) => {
    let fileName = null;

    if (req.body.delImg) {
        let sql = `SELECT photo FROM goods WHERE id = ?`;
        con.query(sql, [req.params.id], (err, result) => {
            if (err) throw err;
            if (result[0].photo) {
                fs.unlinkSync('./public/' + result[0].photo);
            }
        });
    }
    if (req.body.file) {
        let type = 'unknown';
        let file;
        if (req.body.file.indexOf('data:image/png;base64,') === 0) {
            type = 'png';
            file = Buffer.from(req.body.file.replace('data:image/png;base64,', ''), 'base64');
        } else if (req.body.file.indexOf('data:image/jpeg;base64,') === 0) {
            type = 'jpg';
            file = Buffer.from(req.body.file.replace('data:image/jpeg;base64,', ''), 'base64');
        } else {
            file = Buffer.from(req.body.file, 'base64');
        }
        fileName = uuidv4() + '.' + type;
        fs.writeFileSync('./public/' + fileName, file);
    }
    let sql;
    let params;
    if (!req.body.delImg && req.body.file) {
        sql = `UPDATE goods SET title = ?, weight = ?, photo = ?, flammable = ? WHERE id = ?`;
        params = [req.body.title, req.body.weight, fileName, req.body.flammable, req.params.id];
    } else {
        sql = `UPDATE goods SET title = ?, weight = ?, flammable = ? WHERE id = ?`;
        params = [req.body.title, req.body.weight, req.body.flammable, req.params.id];
    }
    con.query(sql, params, (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'The cargo item was updated.' }
        });
    });
});
// load good on cont
app.put('/loadgood/:id', (req, res) => {
    let sql = `UPDATE goods SET container_id = ? WHERE goods.id = ?`;

    // console.log('req.body: ', req.body);
    // console.log('req.params: ', req.params);

    con.query(sql, [req.body.container_id, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({
            message: { text: 'The cargo was loaded.' }
        });
    });
});
// delete good
app.delete('/goods/:id', (req, res) => {
    let sql = `SELECT id, photo FROM goods WHERE id = ?`;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        if (result[0].photo) {
            fs.unlinkSync('./public/' + result[0].photo)
        };
    });

    sql = `DELETE FROM goods WHERE id = ?`;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'The cargo item was deleted.' }
        });
    });
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