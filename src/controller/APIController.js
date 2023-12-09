import pool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users` ");

    return res.status(200).json({
        data: rows,
    });
};

let getUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute(`select * from users where id = ?`, [userId]);
    return res.status(200).json({
        message: "ok",
    });
};

let createNewUser = async (req, res) => {
    let { fullName, email, phoneNumber, passWord } = req.body;
    if (!fullName || !email || !phoneNumber || !passWord) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute(
        "insert into users(fullName, email, phoneNumber, passWord) values (?, ?, ?, ?)",
        [fullName, email, phoneNumber, passWord]
    );
    return res.status(200).json({
        message: "ok",
    });
};

let updateUser = async (req, res) => {
    let { fullName, email, phoneNumber, passWord, id } = req.body;
    if (!fullName || !email || !phoneNumber || !passWord) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute(
        "update users set fullName= ?, email= ?, phoneNumber= ?, passWord= ? where id = ?",
        [fullName, email, phoneNumber, passWord, id]
    );
    return res.status(200).json({
        message: "ok",
    });
};

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute("delete from users where id = ?", [userId]);
    return res.status(200).json({
        message: "ok",
    });
};

module.exports = {
    getAllUsers,
    getUser,
    createNewUser,
    updateUser,
    deleteUser,
};
