const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const User = require("./user.js");

//Listing Schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
   url:String,
   filename:String, 
  },
  price: Number,
  location: String,
  country: String,
  reviews:[{
    type:Schema.Types.ObjectId, //one to many relationship
    ref: "Review",
  }  ],
  owner:{
    type:Schema.Types.ObjectId,
    ref: "User",
  },

 geometry:{
  type:{
    type:String,
    enum:['Point'],
    required:true
  },
  coordinates:{
    type:[Number],
    required:true
  }
 },
 category:{
  type:String,
  enum:["Mountains","Beaches","Hikes","Camping","Hiking","Climbing","Caves","Caves","Caves","Caves","Caves","Caves","Caves"],
 }
});



//when listing is delted, reviews for that listing should also be deleted
//middleware
listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}})
  }
 
});

//Creating Listing Model using the listingSchema
const Listing = mongoose.model("Listing", listingSchema);

//Exporting the model to app.js
module.exports = Listing;

