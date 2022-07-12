var express = require('express');
var router = express.Router();
const { userList, userDetails } = require('../controllers/admin');

//? admin routes endpoints

router.get('/users', userList);
router.get('/user/:id/detail', userDetails);


module.exports = router;
