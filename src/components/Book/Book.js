import React from 'react';
import PropTypes from 'prop-types';

import BookActions from './BookActions';

const Book = ({ book, search }) => {
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 174,
						backgroundImage: book.imageLinks
							? search
								? `url(${book.imageLinks.smallThumbnail})`
								: `url(${book.imageLinks.thumbnail})`
							: 'url(../../assets/placeholder.png)',
					}}
				/>
				<BookActions id={book.id} shelf={book.shelf} search={search} />
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">
				{book.authors ? book.authors.join(' ') : 'Unknown Author'}
			</div>
		</div>
	);
};

Book.propTypes = {
	book: PropTypes.shape({
		imageLinks: PropTypes.shape({
			smallThumbnail: PropTypes.string,
			thumbnail: PropTypes.string,
		}),
		id: PropTypes.string,
		title: PropTypes.string,
		authors: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	}).isRequired,
	search: PropTypes.bool,
};

export default Book;
