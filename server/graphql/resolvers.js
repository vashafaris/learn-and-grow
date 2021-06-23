const validator = require('validator');
const moment = require('moment');

const Topic = require('../models/Topic');

module.exports = {
  topics: async function () {
    const data = await Topic.find();
    const totalTopics = await Topic.find().countDocuments();

    return {
      data,
      totalTopics,
    };
  },
  topic: async function ({ id }, req) {
    const topic = await Topic.findById(id);

    if (!topic) {
      const error = new Error('No topic found!');
      error.code = 404;
      throw error;
    }
    return {
      ...topic._doc,
    };
  },
  createTopic: async function ({ topicInput }, req) {
    const errors = [];

    if (validator.isEmpty(topicInput.title)) {
      errors.push({ message: 'Title is required!' });
    }

    if (errors.length > 0) {
      const error = new Error('Invalid input.');
      error.data = errors;
      error.code = 422;
      throw error;
    }

    const isTopicExist = await Topic.findOne({ title: topicInput.title });
    if (isTopicExist) {
      const error = new Error('Topic is already exist!');
      throw error;
    }

    const topic = new Topic({
      title: topicInput.title,
      description: topicInput.description,
      frontSide: topicInput.frontSide,
      backSide: topicInput.backSide,
      difficulty: topicInput.difficulty,
      createdAt: moment().format('DD MMMM YYYY'),
    });
    const createdTopic = await topic.save();

    return { ...createdTopic._doc, _id: createdTopic._id.toString() };
  },
  updateTopic: async function ({ id, difficulty }, req) {
    const topic = await Topic.findById(id);
    if (!topic) {
      const error = new Error('Topic is not found');
      error.code = 404;
      throw error;
    }
    topic.difficulty = difficulty;
    await topic.save();
    return true;
  },
  deleteTopic: async function ({ id }, req) {
    const topic = await Topic.findById(id);
    if (!topic) {
      const error = new Error('Topic is not found');
      error.code = 404;
      throw error;
    }
    await Topic.findByIdAndRemove(id);
    return true;
  },
};
