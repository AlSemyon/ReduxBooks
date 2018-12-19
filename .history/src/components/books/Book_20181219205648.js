import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = ({book}) => 
    <div>
        <h2>{book.title}</h2>
        <p> Category: </p>
    </div>

Book.PropTypes = {
    books: PropTypes.array
}

export default connect(
    ({books}) => ({books})
)(Book)