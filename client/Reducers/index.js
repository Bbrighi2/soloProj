import { combineReducers } from 'redux';
import playerCardReducer from './playerCardReducer';

export default combineReducers({
  players: playerCardReducer,
});
