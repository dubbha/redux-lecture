import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
  const counter = useSelector(state => state.counter);  // selector
  const dispatch = useDispatch();

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => dispatch({ type: 'increment' })}> + </button>
    </>
  );
}