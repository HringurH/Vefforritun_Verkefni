const getInfoPage = (req, res) => {
    res.render('info', {title: 'Gullfoss'});
};

module.exports = {
    getInfoPage
};