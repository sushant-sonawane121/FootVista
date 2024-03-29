const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  orderHistory: [
    {
      date: {
        type: Date,
        required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
  ],
  wishlist: {
    type: [String],
    default: [],
  },
  securityTokens: {
    resetToken: {
      type: String,
      required: true,
    },
    verificationToken: {
      type: String,
      required: true,
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
