const getHomePage = (req, res) => {
    res.render('index', {title: 'Matseðill'});
};

module.exports = {
    getHomePage
};