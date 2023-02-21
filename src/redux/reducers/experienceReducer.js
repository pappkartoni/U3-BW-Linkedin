import {
  CREATE_EXPERIENCE,
  GET_ALL_EXPERIENCES,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
} from "../actions";

const initialState = {
  experiences: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      };

    // case CREATE_EXPERIENCE:
    //   return {
    //     ...state,
    //     experiences: action.payload,
    //   };

    // case UPDATE_EXPERIENCE:
    //   return {
    //     ...state,
    //     experiences: action.payload,
    //   };

    // case DELETE_EXPERIENCE:
    //   return {
    //     ...state,
    //     experiences: action.payload,
    //   };

    default:
      return state;
  }
};

export default experienceReducer;
