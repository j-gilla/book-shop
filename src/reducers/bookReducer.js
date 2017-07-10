export default (state = [], action) => {
  switch (action.type) {
    //check if action dispatched
    //CREATE_BOOK and act on that
    case 'CREATE_BOOK':
      return [
        ...state,
        Object.assign({}, action.book)
      ];
      default:
        return state;
  }
};
