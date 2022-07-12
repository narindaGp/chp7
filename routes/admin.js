var express = require('express');
var router = express.Router();
const { userList, userDetails, userEdits } = require('../controllers/admin');

//? admin routes endpoints

router.get('/users', userList);
router.get('/user/:id/detail', userDetails);
router.get('/user/:id/edit', userEdits);

module.exports = router;
