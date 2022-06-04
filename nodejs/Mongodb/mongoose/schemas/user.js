const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  // _id는 자동으로 넣어준다.
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  comment: {
    type : String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);