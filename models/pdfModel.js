const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
  version: {
    type: String,
  },
  date: {
    type: String,
  },
  pdfPath: {
    type: String,
  },
});

module.exports = mongoose.model("PDF", pdfSchema);
