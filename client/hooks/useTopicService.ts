import { useState } from 'react';
import { useRouter } from 'next/router';

export const useTopicService = () => {
  const router = useRouter();
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState();

  const getTopics = async () => {
    const graphqlQuery = {
      query:
        '{ topics { data { _id, title, description, difficulty, frontSide, backSide, createdAt } } }',
    };

    await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((data) => handleGetTopicsSuccess(data))
      .catch((err) => {
        handleError(err);
      });
  };

  const getTopicById = async (id) => {
    const graphqlQuery = {
      query: `{ topic(id: "${id}") { _id, title, description, difficulty, createdAt } }`,
    };

    await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((data) => handleGetTopicByIdSuccess(data))
      .catch((err) => {
        handleError(err);
      });
  };

  const createTopic = async (
    title,
    description,
    frontSide,
    backSide,
    difficulty
  ) => {
    const graphqlQuery = {
      query: `
      mutation {
        createTopic(topicInput:{title: "${title}", description: "${description}", frontSide: "${frontSide}", backSide: "${backSide}", difficulty: "${difficulty}" }) {
          _id
        }
      }
    `,
    };

    await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((r) => r.json())
      .then((data) => handleCreateTopicSuccess(data))
      .catch((err) => {
        handleError(err);
      });
  };

  const updateTopic = async (id, difficulty) => {
    const graphqlQuery = {
      query: `
      mutation {
        updateTopic(id: "${id}", difficulty:"${difficulty}")
      }
    `,
    };

    await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((data) => handleUpdateTopicSuccess(data))
      .catch((err) => {
        handleError(err);
      });
  };

  const deleteTopic = async (id) => {
    const graphqlQuery = {
      query: `
      mutation {
        deleteTopic(id: "${id}")
      }
    `,
    };

    await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((data) => handleDeleteTopicSuccess(data))
      .catch((err) => {
        handleError(err);
      });
  };

  const handleGetTopicByIdSuccess = (data) => {
    console.log(data);
  };

  const handleUpdateTopicSuccess = (data) => {
    router.reload();
  };

  const handleDeleteTopicSuccess = (data) => {
    router.reload();
  };

  const handleCreateTopicSuccess = (response) => {
    router.reload();
  };

  const handleGetTopicsSuccess = (data) => {
    setTopics(data.data.topics.data);
  };

  const handleError = (err) => {
    console.log(err);
  };

  return {
    topic,
    topics,
    getTopics,
    getTopicById,
    createTopic,
    updateTopic,
    deleteTopic,
  };
};
