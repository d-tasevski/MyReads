import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GridLoader } from 'react-spinners';

import { fetchAllBooks } from './Redux/actions/bookActions';
import Navigation from './components/Navigation/Navigation';
import Shelf from './components/Shelf/Shelf';

class App extends Component {
	static propTypes = {
		fetchAllBooks: PropTypes.func.isRequired,
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

	// Keep for reference
	// onSearchClose = () =>
	// 	this.setState({ isSearchVisible: false }, () => this.props.clearSearchResults());

	render() {
		const { bookData } = this.props;

		return (
			<div className="app">
				{/* {this.state.isSearchVisible && (
					<Portal>
						<Search closeCallback={this.onSearchClose} />
					</Portal>
				)} */}
				<Navigation />
				{bookData.isLoading ? (
					<div className="centered">
						<GridLoader color="#f44336" margin="5px" size={50} />
					</div>
				) : (
					<Shelf books={bookData.books} />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	bookData: state.books,
});

const mapDispatchToProps = dispatch => ({
	fetchAllBooks: () => dispatch(fetchAllBooks()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
