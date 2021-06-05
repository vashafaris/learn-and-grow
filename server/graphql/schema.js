const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Topic {
    _id: ID!
    title: String!
    description: String!
    createdAt: String!
    updatedAt: String!
  }

  type TopicData {
      topics: [Topic!]!
      totalTopics: Int!
  }

  input TopicInput {
    title: String!
    description: String!
  }

  type RootQuery {
    topics: TopicData!
  }

  type RootMutation {
    createTopic(topicInput: TopicInput): Topic!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
