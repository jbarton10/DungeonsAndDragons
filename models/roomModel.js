const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomID: { type: String, required: true, index: { unique: true } },
  groupMembers: { type: Array, required: true },
  created: {
    type: Date,
    default: Date.now
  }
});

const room = mongoose.model("Room", roomSchema);
module.exports = room;
