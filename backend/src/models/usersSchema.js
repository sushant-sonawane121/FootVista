const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  pin: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  orderHistory: [
    {
      date: {
        type: Date,
        required: true
      },
      totalAmount: {
        type: Number,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    }
  ],
  wishlist: {
    type: [String],
    required: true
  }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
