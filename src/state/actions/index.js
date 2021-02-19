import {SET_PLAY, ADD_CHANNEL} from "./actionTypes";

let nextTodoId = 0
export const addSong = note => ({
    type: 'ADD_SONG',
    playload:note
})

export const addChannel = channel => ({
    type: ADD_CHANNEL,
    playload:channel
})


export const setPlay = () => ({
    type: SET_PLAY,
})
