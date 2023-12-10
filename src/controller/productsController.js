let getProductspage = async (req, res) => {
    return res.render("products/products.ejs");
};

module.exports = {
    getProductspage,
};
