const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  roomID: { type: String, required: true },
  playerStats: { type: Object, required: true },
  notes: { type: Array, required: false }
});

const player = mongoose.model("Player", playerSchema);
module.exports = player;
