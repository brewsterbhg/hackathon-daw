// The initial state of the App
import { SET_PLAY, SET_PAUSE } from "../actions/actionTypes";

export const initialState = {
    isPlaying: false,
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAY:
            return {
                ...state,
               isPlaying: true
            }
            case SET_PAUSE:
            return {
                ...state,
               isPlaying: false
            }

        default:
            return state
    }
}

export default playerReducer
