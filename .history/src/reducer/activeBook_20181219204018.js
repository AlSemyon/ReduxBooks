import { defaultBooks } from '../books'

const defaultBook = defaultBooks.length > 0 ? defaultBooks[0] : null;

const activeBook = (state = defaultBooks[0], action) => {
    return state
}

export default activeBook;