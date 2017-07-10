// Set up your root reducer here...
 import { combineReducers } from 'redux';
import books from './bookReducer';

 export default combineReducers({
   books:books,
   //more reducers would go here

});
