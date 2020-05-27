const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

router.get('/', function (req, res, next ) {
  res.render('users.ejs');
});

router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    db.User.create({
      username, 
      email,
      password: hash
    }).then((results) => {
      res.redirect('./users');
    });
  });
});
module.exports = router;

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Form.associate = function(models) {
    // associations can be defined here
  };
  return Form;
};