import { defaultBooks } from '../books'

const defaultBook = defaultBooks.length > 0 ? defaultBooks[0] : null;

const activeBook = (state = defaultBook, action) => {
    return state
}

export default activeBook;