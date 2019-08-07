import React, {Component} from 'react';
import Item from './Item.jsx'
import AddItem from './AddItem.jsx'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: [
      {
        id: 1,
        item: 'eggs',
        priority: 'important',
      },
      {
        id: 2,
        item: 'milk',
        priority: 'critical',
      },
      {
        id: 3,
        item: 'cheese',
        priority: 'important',
      }
      ]
    }
  }

  newItem = (data) => {
    var newItem = {
      id: Date.now(),
      ...data
    }

    var newlist = [...this.state.list,newItem];

    this.setState({list: newlist})
  }

  removeItem = (id) => {
    var listitems = this.state.list;
    var filtered = listitems.filter((i) => {return i.id !== id});
    this.setState({list:filtered});
  }

  updateItem = (id, data) => {
    var list = this.state.list;
    var index = list.findIndex(function(i){
      return i.id == id;
    });

    var updateItem = {...list[index],...data};
    list[index] = updateItem;

    this.setState({list});
  }

  render(){
    return(
      <div className="wrap">
        <div className="container">
            <h1>Shopping List</h1>
            
            {this.state.list.map((listitem) => {
              var listitemProps = {
                ...listitem,
                key: listitem.id,
                removeItem: this.removeItem,
              };
              return(
                <Item {...listitemProps}/>
              )
            })
            }

            <AddItem submitNewItem={this.newItem}/>
        </div>
    </div>
    )
  }
}

export default App;
