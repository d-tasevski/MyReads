import React from 'react';

import BookActions from './BookActions';

const Book = ({ book }) => {
	console.log(book);
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 174,
						backgroundImage: `url(${book.imageLinks.thumbnail})`,
					}}
				/>
				<BookActions id={book.id} />
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{book.authors.join(' ')}</div>
		</div>
	);
};

export default Book;
