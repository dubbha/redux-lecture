// When <Redirect> is rendered it navigates to a new location.
// Current location is replaced in the history stack (replace by default)
<Redirect to="/about" />

<Redirect to={{
  pathname: '/login',
  search: '?utm=your+face',
  state: { from: currentLocation }
}}/>

<Switch>
  <Route path="/new" component={New} />
  <Redirect from="/old" to="/new" />     {/* Redirect from Legacy URL */}
</Switch>