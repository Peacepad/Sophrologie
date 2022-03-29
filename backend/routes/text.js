const express = require('express');
const router = express.Router();
const textCtrl = require('../controllers/text');

router.get('/', textCtrl.get);


module.exports = router;