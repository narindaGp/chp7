var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const user = {
    id: "",
    isLogin: false
  }
  const player = {}
  res.render('index', { title: 'Express', user, player });
});

module.exports = router;
