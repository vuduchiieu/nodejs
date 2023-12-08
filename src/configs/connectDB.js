import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "brdyncj8vrxm9fkfvbjx-mysql.services.clever-cloud.com",
    user: "uvgblflufelbe28r",
    password: "F63pHZMEefidpmEGuvWq",
    database: "brdyncj8vrxm9fkfvbjx",
    port: 3306,
});

export default pool;
