// Component.container.js
import { connect } from 'react-redux';
import { searchTodos } from './actions';
import { Component } from './Component';

const mapDispatchToProps = dispatch => ({                       // (dispatch, [ownProps])
  onChange: event => dispatch(searchTodos(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);