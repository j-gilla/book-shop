import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input)
  }

  render(){
    //title input tracker
    let titleInput;
    //return JSX
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {/*traverse boooks array */}
          { this.props.books.map((b, i) => <li key={i}>{b.title}</li> ) }
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit ={e =>{
            //prevent request
            e.preventDefault();
            //Assemble inputs
            let input = {title: titleInput.value};
            //Call handler
            this.submitBook(input);
            //Reset Form
            e.target.reset();
          }}>
          <input type="text" name="title" ref={node => titleInput = node}/>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
}
//Map sate from store to props
const mapStateToProps = (state) => {
  return {
    //gives access to this.props.books -
    books:state.books
  }
};


//Map actions to props
const mapDispatchToProps = (dispatch)=>{
  return {
    //can now ccess this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

//use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);
