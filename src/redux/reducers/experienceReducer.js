import { CREATE_EXPERIENCE, GET_ALL_EXPERIENCES, UPDATE_EXPERIENCE, DELETE_EXPERIENCE, GET_SINGLE_EXPERIENCE  } from "../actions";

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
            console.log("we edit", action.payload)
            return {
                ...state,
                experienceToEdit: action.payload
            }

        case CREATE_EXPERIENCE:
            return state

        case UPDATE_EXPERIENCE:
            return state

        case DELETE_EXPERIENCE:
            return state

        default:
            return state
    }
}

export default experienceReducer