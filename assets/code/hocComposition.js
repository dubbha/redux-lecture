import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
// ...
// compose(f, g, h) is the same as (...args) => f(g(h(...args)))
export default compose(withRouter, connect(mapStateToProps))(DeepComponent);