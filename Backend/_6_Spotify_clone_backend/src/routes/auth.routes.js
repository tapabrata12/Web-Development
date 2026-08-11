const express = require('express');
const Reg = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register',Reg.register);
router.post('/login',Reg.login);


module.exports = router;