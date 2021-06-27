import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFetch } from '../hooks/useFetch/useFetch.hook';

export const useTopicService = () => {
  const { post } = useFetch();
  const router = useRouter();
  const [topics, setTopics] = useState([]);

  const getTopics = async () => {
    const graphqlQuery = {
      query: `query {
        topics {
          data {
            _id
            title
            description
            frontSide
            backSide
            difficulty
            createdAt
          }
        }
      }`,
    };

    await post(graphqlQuery)
      .then((response) => response.json())
      .then((data) => handleSuccess(data))
      .catch((err) => handleError(err));
  };

  const createTopic = async (
    title: string,
    description: string,
    frontSide: string,
    backSide: string,
    difficulty: string
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

    await post(graphqlQuery)
      .then((r) => r.json())
      .then(() => handleSuccess())
      .catch((err) => {
        handleError(err);
      });
  };

  const updateTopic = async (id: string, difficulty: string) => {
    const graphqlQuery = {
      query: `
      mutation {
        updateTopic(id: "${id}", difficulty:"${difficulty}")
      }
    `,
    };

    await post(graphqlQuery)
      .then((response) => response.json())
      .then(() => handleSuccess())
      .catch((err) => {
        handleError(err);
      });
  };

  const deleteTopic = async (id: string) => {
    const graphqlQuery = {
      query: `
      mutation {
        deleteTopic(id: "${id}")
      }
    `,
    };

    await post(graphqlQuery)
      .then((response) => response.json())
      .then(() => handleSuccess())
      .catch((err) => {
        handleError(err);
      });
  };

  const handleSuccess = (data?) => {
    if (data) {
      setTopics(data.data.topics.data);
      return;
    }

    router.reload();
  };

  const handleError = (err) => {
    console.log(err);
  };

  return {
    topics,
    getTopics,
    createTopic,
    updateTopic,
    deleteTopic,
  };
};
