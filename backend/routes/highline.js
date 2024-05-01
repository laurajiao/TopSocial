const express = require('express');
const axios = require('axios')

const {getHighline}= require('../controllers/highlineController');

const highlineRouter= express.Router();
highlineRouter.get('/',getHighline);

module.exports = highlineRouter;



