// //mongodb+srv://hochi:<password>@cluster0.ourue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// const { MongoClient } = require("mongodb");

 

// // Replace the following with your Atlas connection string                                                                                                                                        

// const url = "mongodb+srv://hochi:asdfghjkl1@cluster0.ourue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const client = new MongoClient(url);

// async function run() {

//     try {

//         await client.connect();

//         console.log("Connected correctly to server");

//     } catch (err) {

//         console.log(err.stack);

//     }

//     finally {

//         await client.close();

//     }

// }

// run().catch(console.dir);

// /*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://hochi:<password>@cluster0.ourue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// */