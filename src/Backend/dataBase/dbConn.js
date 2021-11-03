const { Router } = require('express');
const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Data_Warehouse',
})

dbConn.connect((err) => {
    if (err) throw err; console.log('Acceso concedido.')
})

module.exports = dbConn