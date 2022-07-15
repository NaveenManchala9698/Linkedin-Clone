import { ADD_EXPERIENCE } from "../actions";

const initialState = {
  fetchedExperiences: [],
};

const experienceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXPERIENCE:
      return {
        fetchedExperiences: payload,
      };
    default:
      return state;
  }
};

export default experienceReducer;
