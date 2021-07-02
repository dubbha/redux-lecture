useEffect(() => {
  const sub = props.source.subscribe(); // subscription

  return () => sub.unsubscribe(); // cleanup function, called when either deps change
                                  // or component umnounts, like componentWillUnmount
}, [props.source]);