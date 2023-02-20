import {
  FETCH_PROFILE,
  FETCH_PROFILE_LOADING,
  FETCH_PROFILE_ERROR,
} from "../actions";

const initialState = {
  fetchProfile: [],
  isLoading: true,
  isError: false,
};

const fetchOwnProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        fetchProfile: action.payload,
      };
    case FETCH_PROFILE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_PROFILE_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default fetchOwnProfileReducer;
