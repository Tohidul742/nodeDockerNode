const dotenv = require('dotenv');
dotenv.config({path:'config.env'})
const app =require('./src/app.js');
const PORT = process.env.PORT | 5000
app.listen(PORT,()=>{
	console.log(`server is running http://localhost:${PORT}`)
})

