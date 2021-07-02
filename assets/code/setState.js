class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'John' };
  }

  render() {
    return (
      <div>
        <div>Hello, {this.state.name}</div>
        <button onClick={() => this.setState({ name: 'Mary' })}> {/* do NOT mutate state */}
          click me
        </button>
      </div>
    );
  }
}