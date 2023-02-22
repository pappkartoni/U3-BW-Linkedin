import {
  CREATE_POST,
  DELETE_POST,
  GET_ALL_POSTS,
  UPDATE_POST,
} from "../actions";

const initialState = {
  postList: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        postList: [...action.payload],
      };
    case CREATE_POST:
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        postList: state.postList.filter(
          (element) => element._id !== action.payload
        ),
      };
    case UPDATE_POST:
      return {
        ...state,
        postList: [
          ...state.postList.filter(
            (element) => element._id !== action.payload._id
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

// list of posts in array, match id to one update and replace in position

export default postReducer;
