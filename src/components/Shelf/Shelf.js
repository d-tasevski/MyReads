import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Book/Book';

const Shelf = props => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">Currently Reading</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{props.books && props.books.map(book => <Book key={book.id} book={book} />)}
				</ol>
			</div>
		</div>
	);
};

Shelf.propTypes = {
	books: PropTypes.array,
};

export default Shelf;
