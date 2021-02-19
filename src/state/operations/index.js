import {setPlay, addChannel, selectChannel} from '../actions';




const asyncPlayBackDummy = () => async dispatch => {

    // await asyncFunction
    dispatch(setPlay())

};

const appendChannel = (newChannels) => async dispatch => {
    dispatch(addChannel(newChannels))
};

const setSelectedChannel = (newChannels) => async dispatch => {
    dispatch(selectChannel(newChannels))
};



const setIsPlaying = () => async dispatch => {
    dispatch(setIsPlaying())
};



export {
    asyncPlayBackDummy,
    setIsPlaying,
    appendChannel,
    setSelectedChannel
};
