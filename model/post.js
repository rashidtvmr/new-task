const faker = require("faker");
const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    postedby: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    content: {
      type: String,
      default: faker.lorem.sentence()
    },
    imgUrl: {
      type: String,
      default: faker.image.imageUrl
    },
    comments: [
      {
        commentBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        createdAt: { type: Date, default: Date.now() },
        commentBody: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
);
module.exports = mongoose.model("posts", schema);
