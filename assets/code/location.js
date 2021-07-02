// Location object contains current location and passed state
props: {
  location: {
    key: 'ac3df4',                   // not with HashHistory!
    pathname: '/somewhere'
    search: '?some=search-string',
    hash: '#howdy',
    state: {
      [userDefined]: true
    }
  }
}