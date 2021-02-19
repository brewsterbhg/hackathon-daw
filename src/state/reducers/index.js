import { combineReducers } from 'redux'
import playerReducer from './player.reducer'
import sequenceReducer from './sequence.reducer'

export default combineReducers({
    player: playerReducer,
    sequence: sequenceReducer,
})
