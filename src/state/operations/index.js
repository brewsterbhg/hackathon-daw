import {setPlay, addChannel} from '../actions';




const asyncPlayBackDummy = () => async dispatch => {

    // await asyncFunction
    dispatch(setPlay())

};

const appendChannel = () => async dispatch => {
    dispatch(addChannel())
};




const setIsPlaying = () => async dispatch => {
    dispatch(setIsPlaying())
};



export {
    asyncPlayBackDummy,
    setIsPlaying,
    appendChannel
};
