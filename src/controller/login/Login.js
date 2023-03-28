const dbCon = require('../../database/database')

exports.Login = async(req,res,next)=>{
  const conn= await dbCon.connection()
  const collection = conn.collection('user');
  const findResult =  await collection.find({'username':req.body.username, "password":req.body.password})
  if(!findResult) res.status(200).json({'status':true,"msg":"login failed !Please try again",});
  res.status(200).json({'status':true,"msg":"login successfully",findResult});
}
