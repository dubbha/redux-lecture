class ErrorBoundary extends React.Component {
  state = { hasError: false };                 // class property, no need for constructor

  static getDerivedStateFromError(error) {
    return { hasError: true };                         // update state so the next render
  }                                                    // will show the fallback UI

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);  // log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;                  // render custom fallback UI
    }
    return this.props.children; 
  }
}