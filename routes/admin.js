var express = require('express');
var router = express.Router();
const { userList } = require('../controllers/admin');

/* GET users listing. */
router.get('/users', userList);

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
