const withAnswer = Component => {  // Higher Order Component (HOC)
  return class extends React.Component {
    state = { answer: 42 };

    render() {  // wrap the input compnent, do NOT mutate it
      return <Component {...this.props} answer={this.state.answer} />;
    }
  };
};

class Wrappee extends React.Component {  // component to be wrapped
  render() {
    return <div>Answer: {this.props.answer}</div>;
  }
}

export default withAnswer(Wrappee);  // wrapped component export