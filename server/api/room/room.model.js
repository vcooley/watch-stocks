const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomId: Number,
  tickerList: { type: Array, default: [] },
});

module.exports = mongoose.model('RoomList', RoomSchema);
