import { MongoClient } from 'mongodb';

// Connection URI to your MongoDB Atlas cluster
const uri = `mongodb+srv://stephanschober:${process.env.MONGO_DB_PASSSWORD}@carbone.ssmc7li.mongodb.net/carbone?retryWrites=true&w=majority`;

// MongoDB Atlas database and collection names
const dbName = 'carbone';
const collectionName = 'carbone_orders';

// Create a new MongoClient
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  let result;
  try {
    // Find a document in the collection
    result = await collection.findOne({ username: name });
  } finally {
    client.close();
  }

  return result;
});
