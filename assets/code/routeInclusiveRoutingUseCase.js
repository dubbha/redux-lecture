// Inclusive Routing Use Case
const App = () => (
  <BrowserRouter>
    <header>
        <Route path="/user" component={UserMenu} />
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={UserContent} />
    </main>
  </BrowserRouter>
);
