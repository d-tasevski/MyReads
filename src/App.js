import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAllBooks } from './Redux/actions/bookActions';
import Navigation from './components/Navigation/Navigation';
import Shelf from './components/Shelf/Shelf';

class App extends Component {
	static propTypes = {
		fetchAllBooks: PropTypes.func.isRequired,
		books: PropTypes.array,
	};

	componentDidMount() {
		this.props.fetchAllBooks();
	}

	render() {
		console.log(this.props);
		return (
			<div className="app">
				<Navigation />
				<Shelf books={this.props.bookData.books} />
				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
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
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
