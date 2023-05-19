const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      
    },
    username: {
      type: String,
      required: true,
      trim: true,
      
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      
    },
    role: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
