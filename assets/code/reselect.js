import { createSelector } from 'reselect';

export const getVisibilityFilter = state => state.visibilityFilter;
export const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(                       // memoized selector
  [getVisibilityFilter, getTodos],        // only re-calculated if input-selectors change
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
);