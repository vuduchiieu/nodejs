import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodejsbasic",
});

// simple query
connection.query("SELECT * FROM `users`", function (err, results, fields) {});

export default connection;
