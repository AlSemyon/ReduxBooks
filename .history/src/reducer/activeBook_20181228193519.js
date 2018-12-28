import { defaultBooks } from '../books';
import C from '../constants';

const defaultBook = defaultBooks.length > 0 ? defaultBooks[0] : null;

const activeBook = (state = defaultBook, action) => {
    let {type, payload} = action; 
    switch(type) {
        case C.SELECT_BOOK:
            return payload.book;
        default:
            return state;
    }
}

export default activeBook;