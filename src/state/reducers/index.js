import { combineReducers } from 'redux'
import playerReducer from './player.reducer'
import sequenceReducer from './sequence.reducer'
import channelReducer from './channel.reducer'

export default combineReducers({
    player: playerReducer,
    sequence: sequenceReducer,
    channel: channelReducer
})
