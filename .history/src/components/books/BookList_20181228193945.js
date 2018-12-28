import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {selectBook} from "../../AC";

const BookList = ({books, selectBook}) => 
    <div>
        <ul className="list-group">
            {books.map(book =>
                <li className="list-group-item" key={book.id}>{book.title}</li>)
            }
        </ul>
    </div>

BookList.PropTypes = {
    books: PropTypes.array,
    selectBook: PropTypes.func.isRequired
}

export default connect(
    ({books}) => ({books})
)(BookList)