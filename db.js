// "importing" mongoose which allows us to interact with MongoDB 
const mongoose = require("mongoose");
// a string representing the URI to connect us to our target database 'demo-db'  
const MONGOURI = "mongodb://127.0.0.1:27017/demo-db";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log("Connected to demo-db");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;