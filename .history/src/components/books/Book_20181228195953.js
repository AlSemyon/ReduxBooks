import React from 'react';
import { connect } from 'react-redux';

const Book = ({book, cat}) => 
    <div>
        <h2>{book.title}</h2>
        <p> Category:{} </p>
        <p> Description:{book.description} </p>
    </div>

export default connect(
    ({activeBook, categoryBook}) => ({
        book: activeBook,
        cat: categoryBook
    })
)(Book)