import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {selectBook} from "../../AC";

const BookList = ({books, selectBook}) => 
    <div>
        <ul className="list-group">
            {books.map(book =>
                <li className="list-group-item"
                    onClick={() => selectBook(book)}
                    key={book.id}>{book.title}
                </li>)
            }
        </ul>
    </div>

BookList.PropTypes = {
    books: propTypes.array,
    selectBook: propTypes.func.isRequired,
}

export default connect(
    ({books}) => ({books}),
    {selectBook}
)(BookList)