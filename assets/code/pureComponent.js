// PureComponent is exactly the same as Component
// except that it handles the shouldComponentUpdate method for you

export class PureComponent extends React.Component {
  shouldComponentUpdate( nextProps, nextState) {
    return !shallowEqual( this.props, nextProps) ||
           !shallowEqual( this.state, nextState)
  }
}