const express = require('express');
const path = require('path');
const home = require('./home.js');

const router = express.Router();


router.get('/user-list', (req, res, next) => {
    //res.sendFile(path.join())
    res.render('users.ejs', { page_title: 'Users List', user_list: home.user_list });
})

exports.users = router;


