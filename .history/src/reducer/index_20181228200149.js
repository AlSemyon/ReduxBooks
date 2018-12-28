import { combineReducers } from 'redux';
import books from './books';
import categoryBook from './categoryBook';
import activeBook from './activeBook';

export default combineReducers({
    books, categoryBooks, activeBook
})