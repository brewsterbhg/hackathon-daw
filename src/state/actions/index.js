import {SET_PLAY} from "./actionTypes";

let nextTodoId = 0
export const addSong = note => ({
    type: 'ADD_SONG',
    playload:note
})

export const setPlay = () => ({
    type: SET_PLAY,
})
