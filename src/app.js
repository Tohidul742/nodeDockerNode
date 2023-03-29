
const express =  require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const route= require("./route/route")
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use('/app',route);
module.exports = app
