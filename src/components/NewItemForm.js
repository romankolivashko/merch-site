import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; //import PropTypes
import ReusableForm from "./ReusableForm";

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
      <ReusableForm 
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add new!" />
    </React.Fragment>
  );
}

// Add PropTypes for the new prop
NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};


export default NewItemForm;