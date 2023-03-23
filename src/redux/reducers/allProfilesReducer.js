import { GET_ALL_PROFILES } from "../actions"

const initialState = {
    profiles: [],
}

const allProfilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROFILES:
            return {
                ...state,
                profiles: [...action.payload]
            }

        default:
            return state
    }
}

export default allProfilesReducer