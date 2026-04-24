const express = require('express');
const path = require('path');
const menuRoutes = require('./src/routes/menu.routes.js');
const infoRoutes = require('./src/routes/info.routes.js');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', menuRoutes);

app.use('/hvannalindir', infoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press CTRL+C to stop the server');
});