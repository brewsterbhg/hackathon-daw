import {setPlay, addChannel} from '../actions';




const asyncPlayBackDummy = () => async dispatch => {

    // await asyncFunction
    dispatch(setPlay())

};

const appendChannel = (newChannels) => async dispatch => {
    dispatch(addChannel(newChannels))
};




const setIsPlaying = () => async dispatch => {
    dispatch(setIsPlaying())
};



export {
    asyncPlayBackDummy,
    setIsPlaying,
    appendChannel
};
