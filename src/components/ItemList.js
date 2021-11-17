import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";


function ItemList(props){

  return (
    <React.Fragment>
        <hr/>
        {props.itemList.map((item) =>
          <Item 
            whenItemClicked = {props.onItemSelection}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            id={item.id}
            key={item.id}/>
        )}
      </React.Fragment>
  );
}

// Add propTypes for itemList.
ItemList.propTypes = {
  itemList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default ItemList;