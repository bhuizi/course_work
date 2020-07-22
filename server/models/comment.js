const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: String,
  email: String,
  movie_id: String,
  text: String,
  date: Date
})

module.exports = mongoose.model('comment', CommentSchema);