const mongoose = require("mongoose");

const dummySchema = {
  name: String,
  email: String,
};

const Dummy = mongoose.model("Dummy", dummySchema);

module.exports = Dummy;
