// with React Redux API Hooks
import { getVisibleTodos, getVisibleTodosFilteredByKeyword } from './selectors';

export const Component = () => {
  const visibleTodos = useSelector(getVisibleTodos);
  const visibleTodosFilteredByKeyword = useSelector(getVisibleTodosFilteredByKeyword);

  return (
    // render
  );
}
