import reducer from './Reducers/index';
// import { loadCard } from './actions/actions';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// store.dispatch(loadCard());

export default store;
