import { combineReducers } from 'redux';
import books from './books';
import categoryBooks from './categoryBooks';
import activeBook from './activeBook';

export default combineReducers({
    books, categoryBooks, activeBook
})