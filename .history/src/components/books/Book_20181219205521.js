import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BookList = ({books}) => 
    <div>
        <ul className="list-group">
            {books.map(book =>
                <li className="list-group-item" key={book.id}>{book.title}</li>)

            }
        </ul>
    </div>

BookList.PropTypes = {
    books: PropTypes.array
}

export default connect(
    ({books}) => ({books})
)(BookList)