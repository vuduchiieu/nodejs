import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users`");
    return res.render("index.ejs", { dataUser: rows });
};

let getDetailpage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [id]);
    return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
    let { firstName, lastName, address, email } = req.body;

    await pool.execute(
        "insert into users(firstName, lastName, address, email) values (?, ?, ?, ?)",
        [firstName, lastName, address, email]
    );

    return res.redirect("/");
};

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute("delete from users where id = ?", [userId]);
    return res.redirect("/");
};

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [id]);
    return res.render("update.ejs", { dataUser: user[0] });
};

let updateUser = async (req, res) => {
    let { firstName, lastName, address, email, id } = req.body;
    await pool.execute(
        "update users set firstName= ?, lastName= ?, address= ?, email= ? where id = ?",
        [firstName, lastName, address, email, id]
    );

    return res.redirect("/");
};

module.exports = {
    getHomepage,
    getDetailpage,
    createNewUser,
    deleteUser,
    getEditPage,
    updateUser,
};
