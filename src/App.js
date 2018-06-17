import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Shelf from './components/Shelf/Shelf';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navigation />
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
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

export default App;
