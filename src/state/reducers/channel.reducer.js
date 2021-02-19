// The initial state of the App
import { ADD_CHANNEL } from "../actions/actionTypes";

export const initialState =  {
    channels : [{name: "Piano Roll"}]
};


const channelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHANNEL :
            return { ...state, channels : action.payload}
        default:
            return state
    }
}

export default channelReducer
