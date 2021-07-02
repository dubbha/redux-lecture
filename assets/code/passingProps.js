const Button = (props) => (                           // Stateless component
    <button onClick={props.onClick}>
      {props.name}
    </button>
);

class App extends React.Component {                    // Stateful component
  constructor(props) {
    super(props);                              // MUST pass props to super()
    this.state = { name: 'John' }
  }

  handleClick() {
    this.setState({ name: 'Mary' });
  }

  render() {
    return (
      <div>
        <Button
          name={this.state.name}
          onClick={() => this.handleClick()}       // arrow function binding
        />
      </div>
    );
  };
}