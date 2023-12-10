import pool from "../configs/connectDB";

let getUserspage = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users`");
    return res.render("users/users.ejs", { dataUser: rows });
};

let getDetailpage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [id]);
    return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
    let { fullName, email, phoneNumber, passWord } = req.body;
    await pool.execute(
        "insert into users(fullName, email, phoneNumber, passWord) values (?, ?, ?, ?)",
        [fullName, email, phoneNumber, passWord]
    );

    return res.redirect("/users");
};

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute("delete from users where id = ?", [userId]);
    return res.redirect("/users");
};

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [id]);
    return res.render("update.ejs", { dataUser: user[0] });
};

let updateUser = async (req, res) => {
    let { fullName, email, phoneNumber, passWord, id } = req.body;
    await pool.execute(
        "update users set fullName= ?, email= ?, phoneNumber= ?, passWord= ? where id = ?",
        [fullName, email, phoneNumber, passWord, id]
    );

    return res.redirect("/users");
};

module.exports = {
    getUserspage,
    getDetailpage,
    createNewUser,
    deleteUser,
    getEditPage,
    updateUser,
};
