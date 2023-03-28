const dbCon = require('../../database/database')

exports.GetUser = async(req,res,next)=>{
  const conn= await dbCon.connection()
  const collection = conn.collection('user');
  const findResult =  await collection.find({}).toArray();
  res.status(200).json({'status':true,"msg":"Success",findResult});
}
