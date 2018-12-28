import { defaultBooks } from '../books';
import C from '../constants';

const defaultBook = defaultBooks.length > 0 ? defaultBooks[0] : null;

const activeBook = (state = defaultBook, action) => {
    switch(action.type) {
        case C.SELECT_BOOK:
            return action.paylaod.book;
        default:
            return state;
    }
}

export default activeBook;