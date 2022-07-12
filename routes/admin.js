var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  const users = [
    {
      id: 1,
      username: 'foo',
      email: 'bar@example.com'
    },
    {
      id: 2,
      username: 'foo',
      email: 'bar@example.com'
    },
  ]
  res.render('./admin/userList', {users, title: 'foo'});
});

module.exports = router;
