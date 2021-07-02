// Exclusive Routing
<BrowserRouter>
  <Switch>
    <Route path="/users/add" component={UsersAdd} />
    <Route path="/users" component={Users} />
    <Route path="/" component={Home} />
  </Switch>
</BrowserRouter>

// v5: <Route path> array
<Route path={['/user', '/profile']} component={User} />