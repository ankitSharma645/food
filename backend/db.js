const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://asuppal0478:asuppal0478@sharma2.tcgvub6.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=sharma2";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, async (err, result) => {
    if (err) console.log("----", err);
    else {
      console.log("Connected to MongoDB");
      // Fetch data from the Atlas collection
      const fetched_data = await mongoose.connection.db.collection(
        "food_items"
      );
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection("foodcategory");
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) {
            console.log(err);
          } else {
            global.food_items = data;
            global.foodCategory = catData;
          }
        });
      });
    }
  });
};

module.exports = mongoDB;

/*
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://asuppal0478:asuppal0478@sharma0/gofoodmern?retryWrites=true&w=majority';

async function mongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const collection = client.db.collection('food_items');
    const data = await collection.find({}).toArray();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    await client.close();
  }
}

module.exports = mongoDB();







//connect to the database
/*
mongoose.connect("mongodb://0.0.0.0:27017/myfood");

mongoose.set('strictQuery',true);
//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});

module.exports = db;*/
