// The initial state of the App
import { ADD_CHANNEL, SELECT_CHANNEL } from "../actions/actionTypes";

export const initialState =  {
    channels: [{ name: "Piano Roll" }],
    selectedChannelIndex: 0
};


const channelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHANNEL :
            return { ...state, channels: action.payload }
        case SELECT_CHANNEL:
            return { ...state, selectedChannelIndex : action.index}
        default:
            return state
    }
}

export default channelReducer
