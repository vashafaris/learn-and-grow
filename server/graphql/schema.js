const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

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
    users: [User]!
    topics: TopicData!
    topic(id: ID!): Topic!
  }

  type RootMutation {
    register(userInput: UserInput): User!
    login(username: String!, password: String!): String
    createTopic(topicInput: TopicInput): Topic!
    updateTopic(id: ID, difficulty: String): Boolean
    deleteTopic(id: ID): Boolean
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
