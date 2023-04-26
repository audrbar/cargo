CREATE DATABASE db4;
ALTER TABLE `containers` ADD CONSTRAINT `cont_rel` FOREIGN KEY (`cont_id`) REFERENCES `goods`(`container_id`) ON DELETE CASCADE ON UPDATE RESTRICT;
CREATE TABLE `goods` (
  `id` int(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `weight` mediumint(8) UNSIGNED NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `flammable` tinyint(3) UNSIGNED NOT NULL,
  `perishable` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `users` (
  `id` tinyint(3) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `psw` char(32) NOT NULL,
  `session` char(36) DEFAULT NULL,
  `role` tinyint(4) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `psw` char(32) NOT NULL,
  `session` char(36) DEFAULT NULL,
  `role` tinyint(4) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `containers` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(30) NOT NULL,
  `type` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))'


// ****************** Create database, table, add data *****************

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE blogify';
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Database created...");
    });
});

app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Posts table created...");
    });
});

app.get('/addpostone', (req, res) => {
    let post = { title: 'Post One', body: 'This is post number one' }
    let sql = 'INSERT INTO posts SET ?';
    con.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Posts one added...");
    });
});

app.get('/addposttwo', (req, res) => {
    let post = { title: 'Post two', body: 'This is post number two' }
    let sql = 'INSERT INTO posts SET ?';
    con.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Posts two added...");
    });
});
