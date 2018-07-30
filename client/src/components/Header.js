import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <Menu className="navigation-header">
        <Link to="/">
          <a className="item">The Tiger</a>
        </Link>
      <Menu.Menu position="right">
        <Link to="/signup">
          <a className="item">Sign Up</a>
        </Link>
        <Link to="/signin">
          <a className="item">Sign In</a>
        </Link>
        <Link to="/signout">
          <a className="item">Sign Out</a>
        </Link>
        <Link to="feature">
          <a className="item">Feature</a>
        </Link>
      </Menu.Menu>
    </Menu>
    );
  }
}

export default Header;
