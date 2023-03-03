/*import {MongoClient} from 'mongodb';

const username = 'stephanschober';

// Connection URI to your MongoDB Atlas cluster
const uri = `mongodb+srv://stephanschober:${process.env.MONGO_DB_PASSSWORD}@https://cloud.mongodb.com/v2/633e71501dba1531754b6a49#/metrics/host/161a4eca99ccd88aa070cfdcbbe52611/status.mongodb.net/<database>?retryWrites=true&w=majority`;

// MongoDB Atlas database and collection names
const dbName = '<database>';
const collectionName = 'carbone_orders';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default defineEventHandler((event) => {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Find a document in the collection
  collection.findOne({ orderNumber: '12345' }, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    // Log the result to the console
    console.log(result);

    // Close the client connection
    client.close();
  });


  const { name } = getQuery(event);
  return {
    name,
  };
});
*/
