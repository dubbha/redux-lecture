const App = () => <div className="red">Hello World</div>;
const App = () => React.createElement('div', { className: 'red' }, 'Hello World');

const App = () => <div className={'red'} data-id={42}>Hello World</div>;
const App = () => React.createElement(
  'div',
  {
    className: 'red',
    'data-id': 42
  },
  "Hello World"
);