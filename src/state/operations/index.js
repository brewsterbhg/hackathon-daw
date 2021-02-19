import {setPlay} from '../actions';




const asyncPlayBackDummy = () => async dispatch => {

    // await asyncFunction
    dispatch(setPlay())

};



export {
    asyncPlayBackDummy,
};
