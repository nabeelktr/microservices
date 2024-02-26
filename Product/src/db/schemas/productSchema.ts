import mongoose from 'mongoose';

const productSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true
        },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    }
})

const ProductModel = mongoose.model(
    "Product",
    productSchema
  );
  
  export { ProductModel };