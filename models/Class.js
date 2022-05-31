const mongoose = require("mongoose");

const ClassSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  }
});

// export model Class with ClassSchema
module.exports = mongoose.model("class", ClassSchema);