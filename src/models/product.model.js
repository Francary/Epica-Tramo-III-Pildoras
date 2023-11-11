import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    maxLength: 50,
    minLength: 3,
  },
  description: {
    type: String,
    required: true,
    maxLength: 200,
    minLength: 3,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['computers', 'phones', 'accesories', 'audio', 'videogames'],
  },
  stock:{
    type: Number,
    default: 0,
    min: 0,
  },
  image:{
    type: String,
    require: true,
  },
  public: {
    type: Boolean,
    default: false,
  }
});

const ProductModel = model("Produt", ProductSchema);


export {ProductModel}





