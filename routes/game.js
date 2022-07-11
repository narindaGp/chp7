var express = require('express');
var router = express.Router();

/* GET game page. */
router.get('/trial', function(req, res, next) {
  const user = {
    id: ""
  }
  const player = {}
  res.render('gunbatas', { title: 'Express', user, player });
});

module.exports = router;
