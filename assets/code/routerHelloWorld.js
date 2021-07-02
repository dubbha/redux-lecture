import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Hello = () => <h1>Hello, World!</h1>;

const App = () => (
    <BrowserRouter>
        <Route path="/" component={Hello} />
    </BrowserRouter>
);

render(<App />, document.getElementById('root'));