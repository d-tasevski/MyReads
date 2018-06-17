import React from 'react';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

const Shelf = props => {
	return (
		<div className="list-books">
			<Bookshelf type="Currently Reading" books={props.books} />
		</div>
	);
};

Shelf.propTypes = {
	books: PropTypes.array,
};

export default Shelf;
