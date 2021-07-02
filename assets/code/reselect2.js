import { createSelector } from 'reselect';

export const getVisibilityFilter = state => state.visibilityFilter;
export const getTodos = state => state.todos;
export const getKeyword = state => state.keyword;

export const getVisibleTodos = createSelector(                         // memoized selector
  [getVisibilityFilter, getTodos],          // only re-calculated if input-selectors change
  // ...
);

const getVisibleTodosFilteredByKeyword = createSelector(  // composing selectors
  [getVisibleTodos, getKeyword],           // memoized selector is itself an input-selector
  (visibleTodos, keyword) =>
    visibleTodos.filter(todo => todo.text.indexOf(keyword) > -1)
)