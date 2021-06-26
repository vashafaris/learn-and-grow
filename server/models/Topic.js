const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  frontSide: {
    type: String,
    required: true,
  },
  backSide: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Topic', TopicSchema);
