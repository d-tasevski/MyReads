import { get, getAll, update, search } from '../../BooksAPI';
import types from './types';

export const fetchAllBooks = () => dispatch => {
	dispatch({
		type: types.FETCH_IN_PROGRESS,
	});

	return getAll()
		.then(res =>
			dispatch({
				type: types.FETCH_ALL_BOOKS_SUCCESS,
				payload: res,
			})
		)
		.catch(err =>
			dispatch({
				type: types.FETCH_ALL_BOOKS_FAILURE,
				payload: err,
			})
		);
};

export const updateBook = (book, shelf) => dispatch => {
	dispatch({
		type: types.FETCH_IN_PROGRESS,
	});

	return update(book, shelf)
		.then(book => dispatch(fetchAllBooks()))
		.catch(err =>
			dispatch({
				type: types.UPDATE_BOOKS_FAILURE,
				payload: err,
			})
		);
};
