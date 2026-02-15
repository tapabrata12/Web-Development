const express = require('express')
const router = express.Router();

const authRoute = require('../controllers/auth.controller');

router.post('/register',authRoute.register);

router.get('/test',(req,res)=>{
  console.log(req.cookies);
  
});

module.exports = router;