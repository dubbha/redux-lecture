// Component.container.js
import { connect } from 'react-redux';
import { getVisibleTodos, getVisibleTodosFilteredByKeyword } from './selectors';
import { Component } from './Component';

const mapStateToProps = state => ({
  visibleTodos: getVisibleTodos(state),
  visibleTodosFilteredByKeyword: getVisibleTodosFilteredByKeyword(state),
})

export default connect(mapStateToProps)(Component);