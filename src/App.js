import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
// eslint-disable-next-line no-unused-vars
import M from 'materialize-css'
import Navbar from './Navbar';
import CardGroup from './CardGroup'
import AddItem from './AddItem';

// App Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {id: 1, name: 'git', stock: 5, img_src: ''},
        {id: 2, name: 'javascript', stock: 6, img_src: ''},
        {id: 3, name: 'react js', stock: 3, img_src: ''},
        {id: 4, name: 'redux', stock: 7, img_src: ''},
      ]
    }
  }

  AddItem = (newItem) => {
    newItem.id = Math.random();
    let newList = [...this.state.list, newItem]
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <Navbar />        
        <CardGroup list={this.state.list} />
        <AddItem addItem={this.AddItem} />
          {/* Total Item */}
        <div>

        </div>
      </div>
    );
  }
}

export default App;