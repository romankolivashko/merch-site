import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";


const mainItemList = [
  {
    name: 'Blooper',
    desc: 'Purple with yellow stripes',
    quant: 5
  },
  {
    name: 'Glubber',
    desc: 'Red and orange coloring with bubble blowing action!',
    quant: 8
  },
  {
    name: 'Floater',
    desc: 'Green with gray gils and Xs for eyes.',
    quant: 2
  },
  {
    name: 'Blubber',
    desc: 'White and blank stripes.',
    quant: 10
  }
];


function ItemList(props){

  return (
    <React.Fragment>
        <hr/>
        {props.mainItemList.map((item, index) =>
          <Item names={item.name}
            quantity={item.quant}
            description={item.desc}
            key={index}/>
        )}
      </React.Fragment>
  );
}

// Add propTypes for ticketList.
ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;