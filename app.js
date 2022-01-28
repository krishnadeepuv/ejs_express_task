const express = require('express');
const body_parser = require('body-parser');
const home = require('./router/home');
const users = require('./router/users');


const app = express();


app.use(body_parser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(home.home)
app.use(users.users)

app.use((req, res, next) => {
    res.render('404', { page_title: 'Page not found' });
})


app.listen(3000);