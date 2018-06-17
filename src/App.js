import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllBooks } from './Redux/actions/bookActions';
import Navigation from './components/Navigation/Navigation';
import Shelf from './components/Shelf/Shelf';

class App extends Component {
	componentDidMount() {
		this.props.fetchAllBooks();
	}

	render() {
		console.log(this.props);
		return (
			<div className="app">
				<Navigation />
				<div className="list-books">
					<div className="list-books-content">
						<Shelf />
					</div>
				</div>
				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	books: state.books,
});

const mapDispatchToProps = dispatch => ({
	fetchAllBooks: () => dispatch(fetchAllBooks()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
