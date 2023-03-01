import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please enter your full name"
  },
  email: {
    type: String,
    required: "Please enter your email",
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: "Please enter your password",
  },
  role: {
    type: String,
    default: "buyer"
  },
  image: {
    type: String,
    default: "https://res.cloudinary.com/dtjsuuyop/image/upload/v1677622469/profile_ncjc0l.png"
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  defaultPaymentMethod: {
    type: String,
    default: ""
  },
  address: [{
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address1: {
      type: String,
    },
    address2: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false
    }
  }]
},{
  timestamps:true
})
const User = mongoose.models.User || mongoose.model("User",userSchema)
export default User