import { UPDATE_PROFILE } from "../actions";

const initialState = {
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return action.payload
    default:
      return state;
  }
};

export default profileReducer;
