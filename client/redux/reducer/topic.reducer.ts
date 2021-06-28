import { SET_TOPICS } from 'redux/action/topic/topic.type';

const initialState = {
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
    default:
      return state;
  }
};
