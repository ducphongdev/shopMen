const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    oauth_provider: {
      type: String,
      default: null,
    },
    oauth_id: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "users",
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
