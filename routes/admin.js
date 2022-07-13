var express = require('express');
var router = express.Router();
const { userList, userDetails, userEdits, userListApi } = require('../controllers/admin');
const Api = require('../controllers/adminApi');

//? admin routes endpoints

router.get('/users', userList);

router.get('/api/users', Api.userList);

router.get('/api/user/:id/detail', Api.userDetails);
router.get('/api/user/:id/edit', Api.userEdits);

router.get('/user/:id/detail', userDetails);
router.get('/user/:id/edit', userEdits);

module.exports = router;
