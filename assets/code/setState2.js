class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'John' };

    this.handleClick = this.handleClick.bind(this);  // bind the callback
  }

  handleClick() {
    this.setState({ name: 'Mary' });
  }

  render() {
    return (
      <div>
        <div>Hello, {this.state.name}</div>
        <button onClick={this.handleClick}>
          click me
        </button>
      </div>
    );
  }
}