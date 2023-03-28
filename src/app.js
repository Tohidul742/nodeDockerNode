
const express =  require("express");
const app = express();
const dotenv =require("dotenv");
dotenv.config({path:"../config.env"});
const cors = require('cors');
const bodyParser = require("body-parser");
const route= require("./route/route")
app.use('/app',route);
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
module.exports = app
