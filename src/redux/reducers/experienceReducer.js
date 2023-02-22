import { GET_ALL_EXPERIENCES, DELETE_EXPERIENCE, GET_SINGLE_EXPERIENCE  } from "../actions";

const initialState = {
    experiences: [],
    experienceToEdit: null
}

const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_EXPERIENCES:
            return {
                ...state,
                experiences: action.payload
            }
        
        case GET_SINGLE_EXPERIENCE: 
            return {
                ...state,
                experienceToEdit: action.payload
            }
        case DELETE_EXPERIENCE:
            return {
                ...state,
                experiences: state.experiences.filter(el => el._id !== action.payload),
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


    default:
      return state;
  }
};

export default experienceReducer;
