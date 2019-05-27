module.exports.arrayElement = Array.from({ length: 10 }, () =>
  Math.random().toFixed(2)
);
const faker = require("faker");
const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    ctype: {
      type: String,
      default: "Line",
      required: true
    },
    xvalue: {
      type: String,
      required: true
    },
    yvalue: {
      type: String,
      required: true
    },
    comments: [
      {
        commentBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        createdAt: { type: Date, default: Date.now() },
        commentBody: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
);
module.exports = mongoose.model("chart", schema);
