import { get, getAll, update, search } from '../../BooksAPI';
import types from './types';

export const fetchAllBooks = () => dispatch => {
	dispatch({
		type: types.FETCH_ALL_BOOKS_INIT,
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
