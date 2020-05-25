const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const shopRoutes = require('./routes/shop')
const userRoutes = require('./routes/user')

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use("/users", userRoutes.routes);

app.use("/", shopRoutes);

app.listen(3000);

