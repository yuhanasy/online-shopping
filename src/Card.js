import React, { Component } from 'react';

// Card Component
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      stock: this.props.stock,
      order: 0,
      stockLeft: this.props.stock
    }
    this.buyItem = this.buyItem.bind(this)
  }

  buyItem = () => {
    this.addOrder();
    this.setState({
      hidden: !this.state.hidden
    })
  }
  
  minusOrder = () => {
    let order = this.state.order;
    order -= 1;
    let stockLeft = this.state.stockLeft;
    stockLeft += 1;

    this.setState({
      order: order,
      stockLeft: stockLeft,
    })

    if (order === 0) {
      this.setState({
        hidden: !this.state.hidden
      })
    }
  }

  addOrder = () => {
    let order = this.state.order;
    order += 1;
    let stockLeft = this.state.stockLeft;
    stockLeft -= 1;

    this.setState({
      order: order,
      stockLeft: stockLeft,
    })
  }

  render() {
    const hidden = this.state.hidden;
    const empty = this.state.stockLeft === 0;
    const cancel = this.state.order === 0;

    const action = hidden ? (
        <div className="input-field card-input">
          <div className="flex flex-center">
            <button className="btn waves-effect waves-light purple darken-4" type="submit" name="action" onClick={() => this.buyItem(this.props.title)}>
              Buy
              <span><i className="material-icons right">shopping_basket</i></span>
            </button>  
          </div>
        </div>
      ) : ( 
        <div className="input-field card-input">
          <div className="flex flex-space-around">
            <button 
              className={"btn waves-effect waves-light purple darken-3 " + (cancel ? "disabled" : null)}
              onClick={this.minusOrder}
            >
              <i className="material-icons">remove</i>
            </button>
            <input 
              id="input-quantity" 
              placeholder="1" 
              name="input-quantity" 
              type="number" 
              min="0" 
              max={this.props.stock} 
              className="center-align validate input-order" 
              value={this.state.order} 
              readOnly
            />
            <button 
              className={"btn waves-effect waves-light purple darken-3 " + (empty ? "disabled" : null)} 
              onClick={this.addOrder}
            >
              <i className="material-icons">add</i>
            </button>                
          </div>
        </div>
      )

    return(
      <div className="col s12 m4 l3">
        <div className="card small center-align">
          <div className="card-image">
            <div className="img-dummy center-aligned purple lighten-5">{this.state.stock}, {this.state.stockLeft}</div>
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

export default Card;