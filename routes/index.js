var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const user = {
    id: ""
  }
  const player = ""
  res.render('index', { title: 'Express', user, player });
});

router.get('/login', function(req, res, next) {
  const user = {
    id: ""
  }
  const player = ""
  res.render('login', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/register/biodata', function(req, res, next) {
  res.render('registerBio', { title: 'Express' });
});


module.exports = router;
