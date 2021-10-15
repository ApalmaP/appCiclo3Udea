const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('CONEXION BASE DE DATOS SE PERDIO');
        }
        if(err.code === 'ER_CON_COUNT_ERROR') {
            console.error('CONEXIONES QUE TIENES EN USO BD');
        }
        if(err.code === 'ECONNREFUSED') {
            console.error('CONEXION FUE RECHAZADA A BD');
        }
    }

    if(connection) connection.release();
    console.log('BASE DE DATOS CONECTADA');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;


