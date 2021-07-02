import React, { Component } from 'react';

class Child extends Component {
  state = { answer: 42 };

  render() {
    return <div>{this.props.children(this.state.answer)}</div>;
  }
}

export const Parent = () => ( // dependency inversion
  <Child>
    {answer => <span>Answer: {answer}</span>}
  </Child>
);