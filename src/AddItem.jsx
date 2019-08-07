import React, {Component} from 'react';
import './App.css';

class AddItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      itemInput: '',
      priorityInput: '',
    }
  }

  itemInputChange = (e) => {
    this.setState({
      itemInput: e.target.value
    });
  }

  priorityInputChange = (e) => {
    this.setState({
      priorityInput: e.target.value
    });
  }

  sumbitListItem = (e) => {
    e.preventDefault();

    var data = {
      item: this.state.itemInput,
      priority: this.state.priorityInput
    }
    this.props.submitNewItem(data);
  }

  render(){
    return(
      <div className="new-list-item">
        <div className="inputs">
          <input onChange={this.itemInputChange} value={this.state.itemInput} className="new-item" type="text" placeholder="Enter New Item..."/>
          <input onChange={this.priorityInputChange} value={this.state.priorityInput} className="new-item-priority" type="text" placeholder="Item Priority..."/>
        </div>
        <button onClick={this.sumbitListItem} className="btn btn-primary">Add Item</button>
      </div>

    )
  }
}


export default AddItem;
