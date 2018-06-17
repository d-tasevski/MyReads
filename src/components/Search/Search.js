import React from 'react';

class Search extends React.Component {
	state = {
		searchVal: '',
	};

	onChange = e => {
		this.setState({ searchVal: e.target.value });
	};

	render() {
		return (
			<div className="search-books centered">
				<input
					type="text"
					value={this.state.searchVal}
					placeholder="Search by title or author"
					onChange={this.onChange}
				/>
				{this.state.searchVal.length === 0 && (
					<small>
						ProTip: You can get all books from the database if you do search with empty
						input
					</small>
				)}
				{/*
		  NOTES: The search from BooksAPI is limited to a particular set of search terms.
		  You can find these search terms here:
		  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
	
		  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		  you don't find a specific author or title. Every search is limited by search terms.
		*/}
			</div>
		);
	}
}

export default Search;
