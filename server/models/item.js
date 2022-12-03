import mongoose from "mongoose";

// define a mongoose schema for item
const itemSchema = mongoose.Schema({
    item_name: { type: String, required: true},
    images :{ type: String},
    creation_date: {type: Date, default:Date.now}, 
    //item_rating: {type:String,default:0}, 
    //item_reviews: {type: String},
    item_owner: {type: mongoose.ObjectId,ref:"User"}, 
    daily_price: { type: Number, required: true}, 
    weekly_price: {type: Number},
    montly_price: {type: Number},
    published: {type: Boolean,default:false},
    item_description: {type:String}, 
    //item_features: {}, 
    location: {
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
const Item = mongoose.model("Item", itemSchema);

export default Item;