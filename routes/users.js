const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');


function checkAuthentication(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/user/login')
    }
}



router.get('/', (req, res) => {
    res.render('users.ejs');
})

router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        db.User.create({
            username,
            email,
            password: hash
        }).then((result) => {
            res.redirect('/users');
        });
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.User.findOne({ where: { username: username} })
    .then(User => {
        bcrypt.compare(password, User.password, (err, match) => {
            if(match) {
                req.session.user = User;
                res.redirect('/');
            }
            else {
                res.send('Incorrect password!')
            }
        })
    })
    .catch(() => {
        res.send('username not found')
    });
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;