export const createBook = (book) => {
  //return action
  return {
    //Unique indentifer
    type: 'CREATE_BOOK',
    //Payload
    book: book
  }
};
