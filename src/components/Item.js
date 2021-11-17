import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  // const name = 'Potato';
  // const name2 = 'Shmiley';
  return (
    <React.Fragment>
      <h3>{props.name} - {props.description} </h3>
      <p><em>{props.quantity}</em></p>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number
};

export default Item;