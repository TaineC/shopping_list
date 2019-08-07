import React, {Component} from 'react';
import './App.css';

class Item extends Component{
  constructor(props){
    super(props);
  }

  removeListItem = () => {
    var selectedRemoval = this.props.id;
    this.props.removeItem(selectedRemoval);
  }

  render(){
    return(
      <div className="list-item">
        <div className="item">
          <p>{this.props.item}</p>
          <i onClick={this.removeListItem} className="fas fa-times"></i>
        </div>
        <div className="priority">{this.props.priority}</div>
      </div>
    )
  }
}

export default Item;
