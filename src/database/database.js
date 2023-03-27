const {MongoClient} = require('mongodb');
const url = process.env.DBHOST | 'mongo://localhost:27017';
const client = new MongoClient(url);
const DbName = "testDB";
const connection = async (){
	await client.connect();
	console.log('Connection successfully to server')
	const db = client.db(DbName);
	return db;
}

module.exports={connection}
