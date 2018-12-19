import React from 'react';
import { connect } from 'react-redux';

const Book = ({book}) => 
    <div>
        <h2>{book.title}</h2>
        <p> Category:{book.categoryId} </p>
        <p> Description:{book.description} </p>
    </div>

export default connect(
    ({activeBook}) => ({book: activeBook})
)(Book)