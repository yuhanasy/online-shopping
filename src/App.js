import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: [],
      list: [
        {id: 1, name: 'git', stock: 5},
        {id: 2, name: 'javascript', stock: 6},
        {id: 3, name: 'react js', stock: 3},
        {id: 4, name: 'redux', stock: 7},
      ]
    }
  }


  render() {
    return (
      <div>
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
        
        <div className="section container">
          <div className="row">
            {this.state.list.map(item => {
              return(
                <div className="col s12 m4 l3" key={item.id}>
                  <div className="card small center-align">
                    <div className="card-image">
                      <div className="img-dummy center-aligned purple lighten-5"></div>
                    </div>
                    <div className="card-title">
                      {item.name}
                    </div>
                    <div className="card-action">
                      <button className="btn waves-effect waves-light purple darken-4" type="submit" name="action">Buy</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
