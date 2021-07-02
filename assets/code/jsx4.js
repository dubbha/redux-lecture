const App = () => (
  <div data-id={42}>
    <span className="red">Hello World</span>
  </div>
);
const App = () => React.createElement(
  'div',
  { 'data-id': 42 },
  React.createElement(
    'span',
    { className: 'red' },
    'Hello World',
  ),
);