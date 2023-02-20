import { GET_ALL_PROFILES } from "../actions"

const initialState = {
    profiles: [],
}

const allProfilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROFILES:
            console.log("get all", action.payload)
            return {
                ...state,
                profiles: [...state.profiles, ...action.payload]
            }

        default:
            console.log("default")
            return state
    }
}

export default allProfilesReducer