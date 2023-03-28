const {MongoClient} = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");
const DbName = "testDB";
const connection = async ()=>{
	await client.connect();
	console.log('Connection successfully to server')
	const db = client.db(DbName);
	return db;
}

module.exports={connection}
