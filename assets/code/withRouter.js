import React, { Component } from 'react';
import { withRouter } from 'react-router';

class DeepComponent extends Component {  // not a "route component", far deep from Route
  render() {
    const { match, location, history } = this.props;

    return (
      <>
        <div>You are now at {location.pathname}</div>
        <button onClick={() => history.push('/away')}>Go Away</button>
      </>
    );
  }
}
    
export default withRouter(DeepComponent);