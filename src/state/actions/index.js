import {SET_PLAY, ADD_CHANNEL, SELECT_CHANNEL, SET_SEQUENCE, SET_PAUSE} from "./actionTypes";

let nextTodoId = 0
export const addSong = note => ({
    type: 'ADD_SONG',
    playload:note
})

export const addChannel = channels => ({
    type: ADD_CHANNEL,
    payload:channels
})

export const selectChannel = index => ({
    type: SELECT_CHANNEL,
    index:index
})



export const setPlay = () => ({
    type: SET_PLAY,
})

export const setPause = () => ({
    type: SET_PAUSE,
})

export const setSequence = (sequence) => ({
    type: SET_SEQUENCE,
    payload: sequence
})
