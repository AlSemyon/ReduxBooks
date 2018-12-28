import C from '../constants'

export default selectBook = (book) => ({
    type: C.SELECT_BOOK,
    payload: {book}
})