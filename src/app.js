const express =  require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv =require("dotenv");
const route= require("./route/route")
dotenv.config();
app.use('/app',route);
app.use(bodyParser.json());
app.use(express.json())
module.exports = app
