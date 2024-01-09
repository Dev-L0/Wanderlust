const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


main()
  .then(() => {
    console.log("Connected to db.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
    //await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:"658ad5057fd88e727f21e4d5"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized"); //cd init and then run node index.js
};

 initDB();


