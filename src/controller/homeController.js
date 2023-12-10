let getHomespage = async (req, res) => {
    return res.render("index.ejs");
};

module.exports = {
    getHomespage,
};
