// Component.container.js
import { connect } from 'react-redux';
import { getTodos, getVisibilityFilter, getVisibleTodos } from './selectors';
import { Component } from './Component';

const mapStateToProps = state => ({
  todos: getTodos(state),
  visibilityFilter: getVisibilityFilter(state),
  visibleTodos: getVisibleTodos(state),
})

export default connect(mapStateToProps)(Component);