const express = require('express');
const router = express.Router();
const textCtrl = require('../controllers/text');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

router.post('/', textCtrl.get);
router.post('/create', auth, multer, textCtrl.create)
router.get('/:id', textCtrl.getOne)

module.exports = router;