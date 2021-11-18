import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete, } = props;

  return (
<React.Fragment>
<h1>Item Detail</h1>
<h3>{item.name} - {item.description}</h3>
      <p><em>{item.quantity}</em></p>
      <button onClick={ props.onClickingPurchase}>Purchase Item</button>
      <button onClick={ props.onClickingRestock}> Restock Item</button>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
</React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func
};

export default ItemDetail;