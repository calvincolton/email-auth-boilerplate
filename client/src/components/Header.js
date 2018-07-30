import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <Menu className="navigation-header">
        <Link to="/">The Tiger</Link>
      <Menu.Menu position="right">
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signout">Sign Out</Link>
        <Link to="feature">Feature</Link>
      </Menu.Menu>
    </Menu>
    );
  }
}

export default Header;
