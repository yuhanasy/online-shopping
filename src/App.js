import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css'


// Navbar Component
const Navbar = () => {
  return (
    <nav className="purple darken-4">
      <div className="nav-wrapper container">
        <a href="home.hmtl" className="brand-logo">
          <img src={logo} className="App-logo" alt="Logo" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Your Order</a></li>
          <li><a href="badges.html">List Buyers</a></li>
        </ul>
      </div>
    </nav>
  )
}

// Card Component
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
    this.buyItem = this.buyItem.bind(this)
  }

  buyItem(itemName) {
    console.log(itemName);
    this.setState({
      hidden: !this.state.hidden
    })
    console.log(this.state.hidden)
  }
  
  render() {
    const hidden = this.state.hidden;
    const action = hidden ? (
        <div className="row">
          <button className="btn waves-effect waves-light purple darken-4" type="submit" name="action" onClick={() => this.buyItem(this.props.title)}>
            Buy
            <span><i className="material-icons right">shopping_basket</i></span>
          </button>  
        </div>
      ) : (
        <div className="row">
          <button className="btn-small waves-effect waves-light purple darken-3 col s3">
            <i className="material-icons">remove</i>
          </button>
          <input id="input-quantity" placeholder="1" name="input-quantity" type="number" min="0" max={this.props.stock} className="col s2 offset-s1 center-align validate" onChange={this.handleChange} value={this.state.name} />
          <button className="btn-small waves-effect waves-light purple darken-3 col s3 offset-s1">
            <i className="material-icons">add</i>
          </button>                
        </div>
      )

    return(
      <div className="col s12 m4 l3">
        <div className="card small center-align">
          <div className="card-image">
            <div className="img-dummy center-aligned purple lighten-5"></div>
          </div>
          <div className="card-title">
            {this.props.title}
          </div>
          <div className="card-action">
            {action}
          </div>
        </div>
      </div>
    )
  }
}


// CardGroup Component
const CardGroup = (props) => {
  const itemList = props.list;
  return(
    <div className="section container">
      <div className="row">
        {itemList.map(item => {
          return (
          <Card title={item.name} key={item.id} stock={item.stock} />
          )
        })}
      </div>
    </div>
  )
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
      ],
      name: '',
      stock: 0,
      img_src: '',
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
    let id = Math.random();
    let newList = {
      id: id, 
      name: this.state.name.slice(),
      stock: this.state.stock.slice(),
      img_src: this.state.img_src.slice()
    }
    console.log(newList)

    let list = [...this.state.list, newList]
    this.setState({
      list: list,
      name: '',
      stock: 0,
      img_src: ''
    })
  }

  render() {
    return (
      <div>
        <Navbar />        
        <CardGroup list={this.state.list} />

        {/* Form Add Items */}
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
          
          {/* Total Item */}
        <div>

        </div>
      </div>
    );
  }
}

export default App;