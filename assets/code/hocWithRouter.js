import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ShowTheLocation extends Component {
  render() {
    const { location } = this.props;

    return (<div>You are now at {location.pathname}</div>);
  }
}

export default withRouter(ShowTheLocation);