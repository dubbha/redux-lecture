// NavLink is a special type of Link that can style itself as "active"
// when its to prop matches the current location

// when location.pathname = '/about'
<NavLink to="/about">About</NavLink>         // 'active' class is added by default
<NavLink to="/about" activeClassName="special">About</NavLink>
<NavLink to="/about" activeStyle={{
    fontWeight: bold,
    color: orange
}}>
  About
</NavLink>

<NavLink exact to="/">Home</NavLink>            // exact match required
<NavLink strict to="/about/">About</NavLink>    // strict trailing slash comparison