import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; //import PropTypes

function NewItemForm(props){
  
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.description.value);
    console.log(event.target.quantity.value);
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='Guppie name'
          placeholder='Giggle Guppie' />
        <input
          type='text'
          name='Quantity'
          placeholder='How many to put in stock' />
        <textarea
          name='Description'
          placeholder='Tell us all about the new Guppie!' />
        <button type='submit'>Create!</button>
      </form>
    </React.Fragment>
  );
}

// Add PropTypes for the new prop
NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};


export default NewItemForm;