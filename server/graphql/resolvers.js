const validator = require('validator');

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
    });
    const createdTopic = await topic.save();

    return { ...createdTopic._doc, _id: createdTopic._id.toString() };
  },
};
