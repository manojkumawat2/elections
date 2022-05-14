const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.hostname ? process.env.hostname : "localhost",
    port: '3306',
    user: process.env.username ? process.env.username : "root",
    password: process.env.password ? process.env.password : "new-password",
    database: process.env.db_name ? process.env.db_name : "election",
});

connection.connect(function(err) {
    if(err) {
        throw err;
    }
});

module.exports = connection;