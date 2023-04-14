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
        SELECT id, title, weight, flammable, perishable, image
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

app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});