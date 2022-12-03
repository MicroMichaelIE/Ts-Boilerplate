import mongoose from "mongoose";

const subdocumentSchema = new mongoose.Schema({
  child: new mongoose.Schema({ name: String, age: Number })
});
const Subdoc = mongoose.model('Subdoc', subdocumentSchema);

// define a mongoose schema for item
const userSchema = mongoose.Schema({
    user_name: { type: String, required: true},
    user_last_name: {type: String, required: true},
    profile_picture :{ type: String},
    creation_date: {type: Date, default:Date.now}, 
    rating: {type:Number,default:-1}, 
    user_reviews: [{type: mongoose.ObjectId, ref:"Review"}], //NOT LIKE THIS; USE VIRTUALITY
    active: {type: Boolean,default:false},
    user_description: {type:String}, 
    user_community: {type: String, required: true},
    user_location: {
        type: {
          type: String, 
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
    
});

//The Model class is a subclass of the Document class. When you use the Model constructor, you create a new document. (new model)

// construct an item model, using the item schema
const User = mongoose.model("User", userSchema);

export default Item;