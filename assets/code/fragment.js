const Button = (props) => (
  <React.Fragment>
    <div>{props.name}</div>
    <button onClick={props.onClick}>{props.name}</button>
  </React.Fragment>
);

// shorter syntax
const Button = (props) => (
  <>
    <div>{props.name}</div>
    <button onClick={props.onClick}>{props.name}</button>
  </>
);