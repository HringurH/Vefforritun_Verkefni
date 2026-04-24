const getInfoPage = (req, res) => {
    res.render('info', {title: 'Hvannalindir'});
};

module.exports = {
    getInfoPage
};