import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: {
    street: { type: String, required: true },
    suburb: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  bedRoom: { type: String, default: "" },
  bathRoom: { type: String, default: "" },
  contactNumber: { type: String, require: true, unique: true },
  services: {
    type: { type: String, },
    extra: { type: Array, },
    price: { type: String, },
    default: {}
  }
}, { timestamps: true })


const Order = mongoose.model('Order', orderSchema)

export default Order
