var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user.controller');

router.post('/signup', UserController.signup);

module.exports = router;