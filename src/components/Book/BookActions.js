import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateBook } from '../../Redux/actions/bookActions';

class BookActions extends React.Component {
	static propTypes = {
		updateBook: PropTypes.func.isRequired,
		id: PropTypes.string.isRequired,
		shelf: PropTypes.string,
	};

	onChange = e => {
		const { value } = e.target;
		const { id, updateBook } = this.props;

		return updateBook(id, value);
	};

	render() {
		const options = ['currentlyReading', 'wantToRead', 'read', 'none'];
		return (
			<div className="book-shelf-changer">
				<select onChange={this.onChange} selected={this.props.shelf}>
					<option value="move" disabled style={{ borderBottom: '1px solid ##2e7d32' }}>
						Move to...
					</option>
					<option value="currentlyReading" style={{ display: 'none' }}>
						{/* NOTE: the onChange handle didn't worked on the first option until I've added this hidden one. Investigate.*/}
						Currently Reading
					</option>
					{options.map(option => (
						<option key={option} value={option}>
							{option.replace(/([a-z](?=[A-Z]))/g, '$1 ')}
						</option>
					))}
				</select>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateBook: (bookId, shelf) => dispatch(updateBook(bookId, shelf)),
});

export default connect(
	null,
	mapDispatchToProps
)(BookActions);
