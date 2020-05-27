const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.render('users.ejs');
})

router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        db.User.create({
            username,
            email,
            password: hash
        }).then((result) => {
            res.redirect('/users');
        })
    });
});

module.exports = router;