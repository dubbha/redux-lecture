// When location.pathname = '/about'
<BrowserRouter>
  <Route path="/about" component={About} />      // renders <About />
  <Route path="/contact" component={Contact} />  // renders null
  <Route component={Always} />                   // renders <Always />
</BrowserRouter>

// v5.1+ alternative to <Route path="/about" component={About} />
<Route path="/about">
  <About />
</Route>
