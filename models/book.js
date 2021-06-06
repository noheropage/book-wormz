const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  date: { type: Date, default: Date.now },
  img: { type: String },
  link: { type: String },
  description: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;