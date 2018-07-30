import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feature extends Component {
  render() {
    return (
      <div>Featured Component</div>
    );
  }
}

export default connect()(Feature);
