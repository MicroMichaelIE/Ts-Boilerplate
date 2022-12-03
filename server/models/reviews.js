import mongoose from "mongoose";


// define a mongoose schema for item
const reviewSchema = mongoose.Schema({
    user_id_writer: {type: mongoose.ObjectId, ref:"User"},
    user_id_receiver: {type: mongoose.ObjectId, ref:"User"},
    creation_date: {type: Date, default:Date.now}, 
    rating: {type:Number,default:-1}, 
    review: {type:String},
    is_lender_review: {type:Boolean,required:false}
    
});

//The Model class is a subclass of the Document class. When you use the Model constructor, you create a new document. (new model)

// construct an item model, using the item schema
const User = mongoose.model("User", userSchema);

export default Item;