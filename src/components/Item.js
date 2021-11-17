import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.desc}</h3>
      <h3>{props.quant}</h3>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  quant: PropTypes.number
}

export default Item;