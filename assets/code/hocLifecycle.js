const withPropsLogger = Component => {  // Higher Order Component (HOC)
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log(`prevProps: ${prevProps}, this.props: ${this.props}`);
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};

const enhancedButton = withPropsLogger(Button);
const enhancedInput = withPropsLogger(Input);