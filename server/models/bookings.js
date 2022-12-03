import mongoose from "mongoose";

// define a mongoose schema for item
const bookingSchema = mongoose.Schema({
    item_id: {type:mongoose.ObjectId,ref:"Item"},
    creation_date: {type: Date, default:Date.now}, 
    total_price: { type: Number, required: true}, 
    pricing_mechanism: {type: String,required: true },
    booking_user: {type:mongoose.ObjectId,ref:"User"},
    initial_date: {type: Date}, 
    end_date: {type: Date}, 
    paid: {type: Boolean, default:false}, 
    delivered: {type: Boolean, default:false}, 
    complete: {type: Boolean, default:false}, 
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


const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;