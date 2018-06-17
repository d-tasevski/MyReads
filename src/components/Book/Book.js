import React from 'react';

const Book = ({ book }) => {
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
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{book.authors.join(' ')}</div>
		</div>
	);
};

export default Book;
