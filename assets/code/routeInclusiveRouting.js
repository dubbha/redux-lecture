// Inclusive Routing (v4+ default)
<BrowserRouter>                               {/* v5: multiple <Router> children */}
  <Route exact path="/" component={Home} />   {/* exact match required */}
  <Route path="/about" component={About} />
</BrowserRouter>