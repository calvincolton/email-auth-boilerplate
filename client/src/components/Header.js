import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../styles/HeaderStyles.css';

class Header extends Component {
  renderAuthLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="feature">Feature</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    );
  }

  render() {
    return (
      <Menu className="navigation-header">
        <div>
          <Link to="/">The Tiger</Link>
        </div>
      <Menu.Menu position="right">
        {this.renderAuthLinks()}
      </Menu.Menu>
    </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
