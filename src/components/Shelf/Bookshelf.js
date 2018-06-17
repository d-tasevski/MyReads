import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Book/Book';

const BookShelf = props => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.type.replace(/([a-z](?=[A-Z]))/g, '$1 ')}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{props.books && props.books.map(book => <Book key={book.id} book={book} />)}
				</ol>
			</div>
		</div>
	);
};

BookShelf.propTypes = {
	books: PropTypes.array,
	type: PropTypes.string.isRequired,
};

export default BookShelf;
