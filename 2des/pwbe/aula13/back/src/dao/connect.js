const mysql = require('mysql');

const con = mysql.createConnection({ // Conectando o banco com backend
    host: 'localhost',
    user: 'root',
    database: 'nutricao'
});

module.exports = con;