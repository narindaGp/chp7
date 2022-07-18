var express = require('express');
var router = express.Router();
const Home = require('../controllers');

/* GET home page. */

router.get('/', Home.getHome);
router.get('/login', Home.getLogin);
router.get('/register', Home.getRegister);

router.post('/login', Home.login);
router.post('/register', Home.register);

module.exports = router;
