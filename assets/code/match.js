// Match object contains information about how <Route path> matched the URL
props: {
  match: {
    path: '/about/:name', // The path pattern used to match.
    url: '/about/joe',    // The matched portion of the URL.
    isExact: true,        // true if the entire URL was matched.
    params: {             // Key/value pairs parsed from the URL,
      name: 'joe'         // corresponding to the dynamic segments
    }                     // of the path
  }
}