const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');
const { getGoodById, getGoods, deleteGood, createGood } = require('./goods');
const { query, con } = require('./mysql');
const app = express();
const port = 3003;

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

// GOODS API GOODS API GOODS API GOODS API GOODS API GOODS API GOODS API

app.get('/goods', async (req, res) => {
    try {
        const result = await getGoods();
        await deleteGood(result[0].id);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.json({ text: 'Failed to get items', type: 'error' });
    }
});

app.post('/goods', async (req, res) => {
    await createGood({ ...req.body });
    res.json({
        message: { text: 'New item was created.', 'type': 'success' }
    });
});

app.delete('/goods/:id', async (req, res) => {
    await deleteGood(req.params.id);
    res.json({
        message: { text: 'New item was deleted.', 'type': 'success' }
    });
});


// Login Login Login Login Login Login Login Login Login Login Login Login Login Login

app.post('/login', (req, res) => {
    const sessionId = uuidv4();
    const sql = `
        UPDATE users
        SET session = ?
        WHERE name = ? AND psw = ?
    `;
    con.query(sql, [sessionId, req.body.name, md5(req.body.psw)], (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            res.cookie('CargoSession', sessionId);
            res.json({
                status: 'ok',
                name: req.body.name
            });
        } else {
            res.json({
                status: 'error',
            });
        }
    });
});

app.post('/logout', (req, res) => {
    res.clearCookie('CargoSession');
    res.json({
        status: 'logout',
    });
});

app.get('/login', (req, res) => {
    const sql = `
        SELECT name
        FROM users
        WHERE session = ?
    `;
    con.query(sql, [req.cookies.CargoSession || ''], (err, result) => {
        if (err) throw err;
        if (result.length) {
            res.json({
                status: 'ok',
                name: result[0].name,
            });
        } else {
            res.json({
                status: 'error',
            });
        }
    });
});

app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});