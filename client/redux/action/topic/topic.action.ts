import { useFetch } from '@hooks/useFetch/useFetch.hook';
import { SET_IS_LOADING, SET_TOPICS } from './topic.type';

export const setIsLoading = (isLoading) => (dispatch) => {
  dispatch({
    type: SET_IS_LOADING,
    payload: isLoading,
  });
};

export const setTopics = (data) => (dispatch) => {
  dispatch({
    type: SET_TOPICS,
    payload: data,
  });
  dispatch(setIsLoading(false));
};

export const getTopics = () => async (dispatch) => {
  const { post } = useFetch();

  dispatch(setIsLoading(true));

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
    .then((data) => dispatch(setTopics(data.data.topics.data)))
    .catch((err) => console.log(err));
};

export const createTopic = (data) => async (dispatch) => {
  const { post } = useFetch();

  dispatch(setIsLoading(true));

  const { title, description, frontSide, backSide, difficulty } = data;

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
    .then(() => {
      dispatch(getTopics());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateTopic = (data) => async (dispatch) => {
  const { post } = useFetch();
  const { id, difficulty } = data;

  dispatch(setIsLoading(true));

  const graphqlQuery = {
    query: `
    mutation {
      updateTopic(id: "${id}", difficulty:"${difficulty}")
    }
  `,
  };

  await post(graphqlQuery)
    .then((response) => response.json())
    .then(() => dispatch(getTopics()))
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTopic = (id: string) => async (dispatch) => {
  const { post } = useFetch();

  dispatch(setIsLoading(true));

  const graphqlQuery = {
    query: `
    mutation {
      deleteTopic(id: "${id}")
    }
  `,
  };

  await post(graphqlQuery)
    .then((response) => response.json())
    .then(() => dispatch(getTopics()))
    .catch((err) => {
      console.log(err);
    });
};
