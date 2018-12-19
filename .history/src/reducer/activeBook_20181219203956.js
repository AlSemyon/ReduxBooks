import { defaultBooks } from '../books'

const defaultBook = defaultBooks.length > 0 ? defaultBooks[0] : null;

export default (state = defaultBooks[0], action) => {
    return state
}