import pool from "../configs/connectDB";

let getAllproducts = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `products` ");

    return res.status(200).json({
        data: rows,
    });
};

module.exports = {
    getAllproducts,
};
