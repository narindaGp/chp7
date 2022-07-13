var express = require('express');
var router = express.Router();

const Api = require('../controllers/adminApi');

//? admin routes endpoints

router.get('/list', Api.userList);

router.get('/:id/detail', Api.userDetails);
router.put('/:id', Api.userEdits);
router.delete('/:id', Api.userDelete);


module.exports = router;
