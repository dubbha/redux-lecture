const Login = () => (<div>You must log in</div>);
const Admin = () => (<div>Welcome to admin zone</div>);

const ProtectedRoute = (props) => (
  authService.checkAuth()
    ? <Admin {...props} />
    : <Redirect to="/" />
);

const App = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/admin" render={ProtectedRoute} /> 
  </Router>
);