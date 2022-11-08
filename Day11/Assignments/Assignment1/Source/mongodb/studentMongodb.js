const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "results-det";
const client = new MongoClient(url);

async function dbConnect(collectnResults) {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection(collectnResults);
}

module.exports = dbConnect;
