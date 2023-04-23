const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db4'
});

const query = (sql, values) => new Promise((resolve, reject) => {
    con.query({ sql, values }, (err, result) => {
        if (err) return reject(err)
        resolve(result);
    });
});

module.exports = { query, con };