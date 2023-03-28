const express =  require('express');
const route = express.Router();

const {Login} = require('../controller/login/Login');
const {CreateUser} =require('../controller/createUser/CreateUser')
const {GetUser} =require('../controller/getuser/GetUser')

route.post('/user/login',Login);
route.post('/user/getUser',GetUser);
route.post('/user/create',CreateUser);

module.exports =route;
