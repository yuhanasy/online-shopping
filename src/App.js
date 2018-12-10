import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
// eslint-disable-next-line no-unused-vars
import M from 'materialize-css'

// Add Item
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stock: undefined,
      img_src: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state)
    this.setState({
      name: '',
      stock: undefined,
      img_src: ''
    })


    // let id = Math.random();
    // let newList = {
    //   id: id, 
    //   name: this.state.name.slice(),
    //   stock: this.state.stock.slice(),
    //   img_src: this.state.img_src.slice()
    // }
    // console.log(newList)
  
    // let list = [...this.state.list, newList]
  }

  render() {
    return(
      <div className="container section row">
        <h3>Add Items</h3>
        <form className="col s12 margin-top" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col l4">
              <label htmlFor="name-item">Item's Name</label>
              <input id="name-item" placeholder="Item's name" name="name" type="text" className="validate" onChange={this.handleChange} value={this.state.name} />
            </div>
            <div className="input-field col l4">
              <label htmlFor="quantity">Item's Quantity</label>
              <input id="stock" placeholder="How much your item is?" name="stock" type="number" min="0" className="validate" onChange={this.handleChange} value={this.state.stock} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col l6">
              <label htmlFor="img-src">Item's Source Path</label>
              <input id="img-src" placeholder="Where is the item's image stored?" name="img_src" type="text" className="validate" onChange={this.handleChange} value={this.state.img_src} />
              <span className="helper-text" data-error="wrong" data-success="right">Example: /assets/img/reactjs.png</span>
            </div>
          </div>
          <div className="row">
            <div className="col s4">
              <button className="btn waves-effect waves-light purple darken-4" type="submit" name="action" onClick={this.handleSubmit}>
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


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