const express =  require('express');
const route = express.Router();

const {Login} = require('../controller/login/Login');

route.post('/user/login',Login);

module.exports =route;
