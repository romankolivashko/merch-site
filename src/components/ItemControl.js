import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null
    };
  }

  
  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
}

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({mainItemList: newMainItemList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} />;
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      );
      buttonText = "Return to Merch List"; // new code
    } else {
      currentlyVisibleState = (
        <ItemList
          itemList={this.state.mainItemList}
          onItemSelection={this.handleChangingSelectedItem}
        />
      );
      buttonText = "Add merch"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default ItemControl;