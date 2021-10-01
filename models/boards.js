const mongoose = require("mongoose");
const BoardSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  stage: {
    type: Number,
  },
});

const BoardModels = mongoose.model("board", BoardSchema);
module.exports = BoardModels;
