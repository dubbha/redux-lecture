class App extends React.Component {
  constructor(props) {
    super(props);           // MUST call the constructor of the parent class

    this.state = { name: 'John' };    // local state
  }

  render() {
    return <div>Hello, {this.state.name}</div>;
  }
}