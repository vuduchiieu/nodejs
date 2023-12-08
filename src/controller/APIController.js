import pool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users`");

    return res.status(200).json({
        data: rows,
    });
};

let createNewUser = async (req, res) => {
    let { firstName, lastName, address, email } = req.body;

    if (!firstName || !lastName || !address || !email) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute(
        "insert into users(firstName, lastName, address, email) values (?, ?, ?, ?)",
        [firstName, lastName, address, email]
    );
    return res.status(200).json({
        message: "ok",
    });
};

let updateUser = async (req, res) => {
    let { firstName, lastName, address, email, id } = req.body;
    if (!firstName || !lastName || !address || !email || !id) {
        return res.status(200).json({
            message: "missing requaired params",
        });
    }
    await pool.execute(
        "update users set firstName= ?, lastName= ?, address= ?, email= ? where id = ?",
        [firstName, lastName, address, email, id]
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
    createNewUser,
    updateUser,
    deleteUser,
};
