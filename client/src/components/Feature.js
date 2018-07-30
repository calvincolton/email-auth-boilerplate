import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>Featured Component</div>
    );
  }
}

export default requireAuth(Feature);
