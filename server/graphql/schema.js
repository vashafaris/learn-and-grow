const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Topic {
    _id: ID!
    title: String!
    description: String!
    frontSide: String!
    backSide: String!
    difficulty: String!
    createdAt: String!
  }

  type TopicData {
    data: [Topic!]!
    totalTopics: Int!
}

  input TopicInput {
    title: String!
    description: String!
    frontSide: String!
    backSide: String!
    difficulty: String!
  }

  type RootQuery {
    topics: TopicData!
    topic(id: ID!): Topic!
  }

  type RootMutation {
    createTopic(topicInput: TopicInput): Topic!
    updateTopic(id: ID, difficulty: String): Boolean
    deleteTopic(id: ID): Boolean
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
