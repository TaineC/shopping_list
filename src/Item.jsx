import React, {Component} from 'react';
import './App.css';

class Item extends Component{
  constructor(props){
    super(props);
      this.state = {
        updateItem: false,
        updatePriority: false,
        itemInput: props.item,
        priorityInput: props.priority,
      }
  }

  removeListItem = () => {
    var selectedRemoval = this.props.id;
    this.props.removeItem(selectedRemoval);
  }

  itemClick = () => {
    this.setState({updateItem: true});
  }

  priorityClick = () => {
    this.setState({updatePriority: true});
  }

  itemEdit = (e) => {
    this.setState({itemInput: e.target.value});
  }

  priorityEdit = (e) => {
    this.setState({priorityInput: e.target.value});
  }

  itemBlur = () => {
    var id = this.props.id;
    var data = {item: this.state.itemInput};
    this.props.updateItem(id,data);
    this.setState({updateItem: false});
  }

  priorityBlur = () => {
    var id = this.props.id;
    var data = {priority: this.state.priorityInput};
    this.props.updateItem(id,data);
    this.setState({updatePriority: false});
  }

  render(){
    return(
      <div className="list-item">
        <div className="item" onDoubleClick={this.itemClick} onBlur={this.itemBlur}>
          {this.state.updateItem ? (
          <input autoFocus className="update-item-input" type="text" onChange={this.itemEdit} value={this.state.itemInput}/>
          ) : this.props.item}
        </div>
        <div className="priority" onDoubleClick={this.priorityClick} onBlur={this.priorityBlur}>
          {this.state.updatePriority ? (
          <input autoFocus className="update-item-input" type="text" onChange={this.priorityEdit} value={this.state.priorityInput}/>
          ) : this.props.priority}
        </div>
        <i onClick={this.removeListItem} className="fas fa-times"></i>
      </div>

    )
  }
}

export default Item;
