import types from '../actions/types';

const initialState = {
	books: [],
	isLoading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_IN_PROGRESS:
			return { ...state, isLoading: true };
		case types.FETCH_ALL_BOOKS_SUCCESS:
			return { ...state, isLoading: false, books: action.payload };
		case types.FETCH_ALL_BOOKS_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case types.UPDATE_BOOKS_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
