import axios from 'axios';
import * as types from './actionTypes';

export const addPlayer = () => (dispatch, getState) => {
  axios
    .put('/players', getState().players)
    .then(({ status }) => {
      if (status === 200) dispatch({ type: types.ADD_PLAYER });
    })
    .catch((err) => console.error(err));
};

// export const addCard = (lastName) => ({
//   type: types.ADD_CARD,
//   payload: lastName,
// });

// export const loadCard = () => (dispatch, getState) => {
//   axios
//     .get('/players')
//     .then(({ data }) => {
//       dispatch({
//         types: types.LOAD_CARD,
//         payload: data,
//       });
//     })
//     .catch((err) => console.error(err));
// };
