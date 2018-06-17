import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './reducers/bookReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
	createStore(
		combineReducers({
			books: bookReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
