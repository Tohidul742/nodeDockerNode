const {MongoClient} = require('mongodb');
const host =  process.env.HOST
const client = new MongoClient(`${host}`);
const DbName = "testDB";
const connection = async ()=>{
	await client.connect();
	const db = client.db(DbName);
	return db;
}
module.exports={connection}
