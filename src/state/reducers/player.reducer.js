// The initial state of the App
import { SET_PLAY, ADD_SONG, ADD_CHANNEL } from "../actions/actionTypes";

export const initialState = {
    isPlaying: false,
    channels: [{name: "Piano Roll"}]
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
        case ADD_CHANNEL:
            const channels = state.channels.push(action.payload);
            return {
                ...state,
               channels: []
            }
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
