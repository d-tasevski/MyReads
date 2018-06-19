import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

import { throttle } from '../../helpers';
import Book from '../Book/Book';
import { searchBooks } from '../../Redux/actions/bookActions';
import { SearchIcon } from '../../assets/SearchIcon';
import { CloseIcon } from '../../assets/CloseIcon';

class Search extends React.Component {
	static propTypes = {
		searchBooks: PropTypes.func.isRequired,
		closeCallback: PropTypes.func.isRequired,
		books: PropTypes.shape({}),
	};

	state = {
		searchVal: '',
	};

	onChange = e => this.props.searchBooks(e.target.value.trim());

	render() {
		return (
			<div className="search-books centered">
				<Link to="/" onClick={this.props.clearSearchResults}>
					<CloseIcon size={25} styles="closeIco" />
				</Link>
				<div>
					<input
						type="text"
						placeholder="Search by title or author"
						onChange={e => throttle(this.onChange(e), 200)}
					/>
					<SearchIcon size={45} styles="searchIco" />
				</div>
				<small>
					Search by title or author. All search terms can be found{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md"
					>
						here.
					</a>
				</small>

				{this.props.books.searchResults &&
					this.props.books.searchResults.length > 0 && <h3>Results:</h3>}

				<div className="search-resultBox">
					{this.props.books.searchIsLoading ? (
						<div className="centered">
							<GridLoader color="#00bcd4" margin="5px" size={50} />
						</div>
					) : (
						this.props.books.searchResults &&
						this.props.books.searchResults.length > 0 &&
						this.props.books.searchResults.map(book => (
							<Book key={book.id} book={book} search />
						))
					)}
					{this.props.books.searchResults &&
						this.props.books.searchResults.error === 'empty query' && (
							<p>{`That search gave no results :(
							Try again with something else. `}</p>
						)}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	searchBooks: query => dispatch(searchBooks(query)),
	clearSearchResults: () =>
		dispatch({
			type: 'CLEAR_SEARCH_RESULTS',
		}),
});

const mapStateToProps = state => ({
	books: state.books,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);

/*
					NOTES: The search from BooksAPI is limited to a particular set of search terms.
					You can find these search terms here:
					https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
				
					However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
					you don't find a specific author or title. Every search is limited by search terms.
*/
