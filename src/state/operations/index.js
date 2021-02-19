import {setPlay} from '../actions';




const asyncPlayBackDummy = () => async dispatch => {

    // await asyncFunction
    dispatch(setPlay())

};


const setIsPlaying = () => async dispatch => {
    dispatch(setIsPlaying())
};



export {
    asyncPlayBackDummy,
    setIsPlaying
};
