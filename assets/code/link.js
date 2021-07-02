// <Link> component is used to create links in your application
// When a <Link> is rendered, an <a> will be rendered in HTML

<Link to='/'>Home</Link>        // renders <a href="/">Home</a>

// Link to object
<Link to={{
    pathname: '/about',        // A string representing the path to link to
    search: '?what=company',   // A string represenation of query parameters
    hash: '#sub-section',      // A hash to put in the URL
    state: { fromHome: true }  // State to persist to the location
}}>
  Home
</Link>