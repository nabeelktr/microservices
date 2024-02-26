import mongoose from 'mongoose';

const cartSchema =  new mongoose.Schema({
    userId: 
    {
        type: String 
    },

    productId: 
    {
        type: String 
    }
}, 
{
    timestamps: true
});

const CartModel = mongoose.model(
    "Cart",
    cartSchema
  );
  
  export { CartModel };