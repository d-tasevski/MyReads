import React from 'react';

import SearchBar from './SearchBar';

const NavBar = () => {
	return (
		<nav className="nav">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<SearchBar />
		</nav>
	);
};

export default NavBar;
