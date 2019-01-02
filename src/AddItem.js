import React, { Component } from "react";

// Add Item
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stock: undefined,
      img_src: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      stock: undefined,
      img_src: ""
    });
  };

  render() {
    return (
      <div className="container section row">
        <h3>Add Items</h3>
        <form className="col s12 margin-top" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col l4">
              <label htmlFor="name-item">Item's Name</label>
              <input
                id="name-item"
                placeholder="Item's name"
                name="name"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
            </div>
            <div className="input-field col l4">
              <label htmlFor="quantity">Item's Quantity</label>
              <input
                id="stock"
                placeholder="How much your item is?"
                name="stock"
                type="number"
                min="0"
                className="validate"
                onChange={this.handleChange}
                value={this.state.stock}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col l6">
              <label htmlFor="img-src">Item's Source Path</label>
              <input
                id="img-src"
                placeholder="Where is the item's image stored?"
                name="img_src"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.img_src}
                required
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Example: /assets/img/reactjs.png
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col s4">
              <button
                className="btn waves-effect waves-light purple darken-4"
                type="submit"
                name="action"
                onClick={this.handleSubmit}
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
