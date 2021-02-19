// The initial state of the App
import {SET_PLAY, ADD_SONG} from "../actions/actionTypes";

export const initialState = {
   isPlaying : false
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_SONG:
        //     return [
        //         ...state,
        //         {
        //             note: action.payload,
        //         }
        //     ]
        case SET_PLAY:
            return {
                ...state,
               isPlaying: true
            }

        default:
            return state
    }
}

export default playerReducer
