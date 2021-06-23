const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Topic {
    _id: ID!
    title: String!
    description: String!
    frontSide: String!
    backSide: String!
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
  }

  type RootQuery {
    topics: TopicData!
  }

  type RootMutation {
    createTopic(topicInput: TopicInput): Topic!
    deleteTopic(id: ID): Boolean
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
