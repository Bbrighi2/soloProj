import * as types from '../actions/actionTypes';

const initialState = {
  playerName: '',
  number: '',
  year: 0,
  height: '',
  weight: '',
  college: '',
  team: '',
  stats: '',
};

const playerCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        playerName: action.payload.playerName,
        number: action.payload.number,
        year: action.payload.year,
        height: action.payload.height,
        weight: action.payload.weight,
        college: action.payload.college,
        team: action.payload.team,
        stats: action.payload.stats,
      };

    default:
      return state;
  }
};

export default playerCardReducer;
