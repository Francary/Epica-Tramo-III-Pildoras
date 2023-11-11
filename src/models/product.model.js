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
  },
  slug:{
    type: String
  }
});

ProductSchema.pre("save", function(next){
  if (this.isModified("price")){
    this.price = +this.price.toFixed(2)  }

  if (this.isModified("name","slug")){
    this.name = this.name.toLowerCase()
    this.slug = this.name.replace(/ /g, '_')}
  
  if (this.isModified("stock")){
    this.stock = parseInt(this.stock)
  }
    next()
})

const ProductModel = model("Produt", ProductSchema);


export {ProductModel}





