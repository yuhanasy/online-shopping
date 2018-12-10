import React from 'react';

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

export default Navbar;