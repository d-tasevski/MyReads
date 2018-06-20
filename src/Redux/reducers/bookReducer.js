import types from '../actions/types';

const initialState = {
	books: [],
	searchResults: [],
	isLoading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_IN_PROGRESS:
			return { ...state, isLoading: true };
		case types.SEARCH_IN_PROGRESS:
			return { ...state, searchIsLoading: true };
		case types.FETCH_ALL_BOOKS_SUCCESS:
			return { ...state, isLoading: false, books: action.payload };
		case types.FETCH_ALL_BOOKS_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case types.UPDATE_BOOKS_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case types.UPDATE_BOOK_SHELF: {
			const updatedBooks = state.books.filter(book => book.id !== action.payload.id);
			return {
				...state,
				isLoading: false,
				books: [...updatedBooks, action.payload],
			};
		}
		case types.SEARCH_BOOKS_SUCCESS:
			return { ...state, searchIsLoading: false, searchResults: action.payload };
		case types.SEARCH_BOOKS_FAILURE:
			return { ...state, searchIsLoading: false, searchResults: [], error: action.payload };
		case types.CLEAR_SEARCH_RESULTS:
			return { ...state, searchIsLoading: false, searchResults: [] };
		default:
			return state;
	}
};
