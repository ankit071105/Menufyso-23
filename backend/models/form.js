import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
    // unique: true,
  },
  table:{
    type:Number
  }
});

export const UserForm = mongoose.model("userbhaiya", schema);
