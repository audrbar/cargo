const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

const app = express();
const port = 3003;

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db4'
});

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

app.get('/goods', (req, res) => {
    const sql = `
        SELECT id, title, weight, flammable, perishable
        FROM goods
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/goods', (req, res) => {
    const sql = `
        INSERT INTO goods ( title, weight, flammable, perishable )
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [req.body.title, req.body.weight, req.body.flammable, req.body.perishable], (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'New item was created.', 'type': 'success' }
        });
    });
});

app.delete('/goods/:id', (req, res) => {

    const sql = `
        SELECT id, amount, blocked
        FROM goods
        WHERE id = ?
    `;

    con.query(sql, [req.params.id], (err, [account]) => {
        if (err) throw err;
        const sql = `
        DELETE FROM goods
        WHERE id = ?
    `;
        con.query(sql, [req.params.id], (err) => {
            if (err) throw err;
            res.json({
                message: { text: 'The cargo item was deleted.', 'type': 'danger' }
            });
        });
    })
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