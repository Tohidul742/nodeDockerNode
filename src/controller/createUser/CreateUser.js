const dbCon = require('../../database/database')

exports.CreateUser = async(req,res,next)=>{
  const conn= await dbCon.connection()
  const collection = conn.collection('user');
  const findResult =  await collection.insertOne(req.body)
  res.status(200).json({'status':true,"msg":"User insert successfully",findResult});
}
