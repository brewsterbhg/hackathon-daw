// The initial state of the App
import { SET_PLAY, SET_SEQUENCE } from "../actions/actionTypes";
import { notes } from "../../data/notes";



const SEQUENCE_LENGTH = 15;

export function generateBlankSequence() {
    const grid = [];

    for (let i = 0; i < SEQUENCE_LENGTH; i++) {
        let column = notes.map((note) => ({ note, isActive: false }));
        grid.push(column);
    }

    return grid;
}

export const initialState =  {
    sequence : generateBlankSequence()
};


const sequenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEQUENCE :
            return {...state, sequence: action.payload}
        default:
            return state
    }
}

export default sequenceReducer