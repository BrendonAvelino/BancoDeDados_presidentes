import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'novousuario',
    password : 'novasenha',
    database : 'presidentesdb'
});

export default pool;