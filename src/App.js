import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GridLoader } from 'react-spinners';

import { fetchAllBooks } from './Redux/actions/bookActions';
import Navigation from './components/Navigation/Navigation';
import Shelf from './components/Shelf/Shelf';
import Portal from './components/Portal/Portal';
import Search from './components/Search/Search';

class App extends Component {
	static propTypes = {
		fetchAllBooks: PropTypes.func.isRequired,
		clearSearchResults: PropTypes.func.isRequired,
		bookData: PropTypes.shape({
			isLoading: PropTypes.bool,
			books: PropTypes.array,
		}),
	};

	state = {
		isSearchVisible: false,
	};

	componentDidMount() {
		this.props.fetchAllBooks();
	}

	onSearchClose = () =>
		this.setState({ isSearchVisible: false }, () => this.props.clearSearchResults());

	render() {
		const { bookData } = this.props;

		return (
			<div className="app">
				{this.state.isSearchVisible && (
					<Portal>
						<Search closeCallback={this.onSearchClose} />
					</Portal>
				)}
				<Navigation />
				{bookData.isLoading && !this.state.isSearchVisible ? (
					<div className="centered">
						<GridLoader color="#f44336" margin="5px" size={50} />
					</div>
				) : (
					<Shelf books={bookData.books} />
				)}

				<div className="open-portal">
					<a onClick={() => this.setState({ isSearchVisible: true })}>Add a book</a>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	bookData: state.books,
});

const mapDispatchToProps = dispatch => ({
	fetchAllBooks: () => dispatch(fetchAllBooks()),
	clearSearchResults: () =>
		dispatch({
			type: 'CLEAR_SEARCH_RESULTS',
		}),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
