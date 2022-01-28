const express = require('express');
const path = require('path');


const router = express.Router();

const user_list = [];

router.get('/', (req, res, next) => {
    //res.sendFile(path.join())
    res.render('index.ejs', { page_title: 'Add users' });
})


router.post('/add-user', (req, res, next) => {
    //res.sendFile(path.join())
    user_list.push(JSON.parse(JSON.stringify(req.body)));
    res.status(302).redirect('/');
})


exports.home = router;
exports.user_list = user_list;

