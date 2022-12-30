import mysql from "mysql2/promise";

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'Cuongha12@',
    database: 'nodejs'
});

export default connection;