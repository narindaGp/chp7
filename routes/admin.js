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

router.get('/user/detail', function(req, res, next) {
  const title = 'user detail';
  const header = 'user detail';
  const selectUser = {
    id: 1,
    username: 'foo',
    role: 'admin',
    email: 'bar@example.com',
  }
  const bio = {
    id: 1,
    firstname: 'John',
    lastname: 'Smith',
    gender: 'male'
  };
  res.render('./admin/userDetail', { title, header, selectUser, bio });
});

module.exports = router;
