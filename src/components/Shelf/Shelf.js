import React from 'react';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

const Shelf = props => {
	// This can be improved :/
	const shelfData = [
		{
			type: 'currentlyReading',
			books: props.books.filter(book => book.shelf === 'currentlyReading') || [],
		},
		{
			type: 'wantToRead',
			books: props.books.filter(book => book.shelf === 'wantToRead') || [],
		},
		{
			type: 'read',
			books: props.books.filter(book => book.shelf === 'read') || [],
		},
	];

	return (
		<div className="list-books">
			{shelfData.map(shelf => (
				<Bookshelf key={shelf.type} type={shelf.type} books={shelf.books} />
			))}
		</div>
	);
};

Shelf.propTypes = {
	books: PropTypes.array,
};

export default Shelf;
