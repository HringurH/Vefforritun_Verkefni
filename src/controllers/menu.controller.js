const getHomePage = (req, res) => {
    res.render('index', {title: 'Matseðill FB'});
};

module.exports = {
    getHomePage
};