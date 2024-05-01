const express = require('express');
const{getProfile}=require('../controllers/profileController')
const profileRouter = express.Router();
const axios = require('axios');//用于拿取数据



profileRouter.get('/',getProfile)
module.exports=profileRouter;
