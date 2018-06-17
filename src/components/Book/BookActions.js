import React from 'react';

const BookActions = props => {
	return (
		<div className="book-shelf-changer">
			<select>
				<option value="move" disabled>
					Move to...
				</option>
				<option onClick={() => {}} value="currentlyReading">
					Currently Reading
				</option>
				<option onClick={() => {}} value="wantToRead">
					Want to Read
				</option>
				<option onClick={() => {}} value="read">
					Read
				</option>
				<option onClick={() => {}} value="none">
					None
				</option>
			</select>
		</div>
	);
};

export default BookActions;
