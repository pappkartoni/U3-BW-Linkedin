import { CREATE_EXPERIENCE, GET_ALL_EXPERIENCES, UPDATE_EXPERIENCE, DELETE_EXPERIENCE  } from "../actions";

const initialState = {
    experiences: [],
}

const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_EXPERIENCES:
            return state

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