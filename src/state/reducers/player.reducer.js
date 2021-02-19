// The initial state of the App
import { SET_PLAY, SET_PAUSE, SET_STOP } from "../actions/actionTypes";

export const initialState = {
    isPlaying: false,
    isStop: false,
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
        case SET_STOP:
            return {
                ...state,
                isPlaying: false,
                isStop: true,
            }

        default:
            return state
    }
}

export default playerReducer
