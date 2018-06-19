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
	return update(book, shelf)
		.then(book => {
			// Do nothing
		})
		.catch(err =>
			dispatch({
				type: types.UPDATE_BOOKS_FAILURE,
				payload: err,
			})
		);
};

export const searchBooks = query => dispatch => {
	dispatch({
		type: types.SEARCH_IN_PROGRESS,
	});

	return search(query)
		.then(res =>
			dispatch({
				type: types.SEARCH_BOOKS_SUCCESS,
				payload: res,
			})
		)
		.catch(err =>
			dispatch({
				type: types.SEARCH_BOOKS_FAILURE,
				payload: err,
			})
		);
};

export const updateShelf = (book, shelf) => dispatch => {
	dispatch(updateBook(book.id, shelf));

	dispatch({
		type: types.UPDATE_BOOK_SHELF,
		payload: book,
	});
};
