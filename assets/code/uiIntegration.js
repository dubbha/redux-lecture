const store = Redux.createStore(counterReducer); // 1) Create a new Redux store

store.subscribe(render);  // 2) Subscribe to redraw whenever the data changes in the future

const valueEl = document.getElementById('value');  // "UI" is some text in a single HTML element

function render() {                         // 3) When the subscription callback runs:
  const state = store.getState();           // 3.1) Get the current store state
  const newValue = state.value.toString();  // 3.2) Extract the data you want

  valueEl.innerHTML = newValue;             // 3.3) Update the UI with the new value
}

render()                                    // 4) Display the UI with the initial store state

document.getElementById('increment').addEventListener('click', function () {
  store.dispatch({ type: 'counter/incremented' });  // 5) Dispatch actions based on UI inputs
})