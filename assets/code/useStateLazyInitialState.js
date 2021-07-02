const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});