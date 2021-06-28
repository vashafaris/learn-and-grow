import { SET_IS_LOADING, SET_TOPICS } from 'redux/action/topic/topic.type';

const initialState = {
  isLoading: false,
  topics: [],
};

export const topicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TOPICS:
      return {
        ...state,
        topics: payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
