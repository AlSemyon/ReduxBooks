import C from '../constants'

export const selectBook = (book) => ({
    type: C.SELECT_BOOK,
    payload: {book}
})