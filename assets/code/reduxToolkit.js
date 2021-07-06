// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({  // Creates a Redux store, and auto-configures Redux DevTools
  reducer: {
    todos: todosReducer,
  },
});

// features/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(                                  // Redux Toolkit allows us to write "mutating" logic
        { text: action.payload, completed: false } // in reducers. It doesn't actually mutate the state
      );                                           // because it uses the Immer library which detects
    },                                             // changes to a "draft state" and produces a brand
    complete: (state, action) => {                 // new immutable state based off those changes
      state[action.payload].completed = true
    },
    toggle: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed
    }
  }
});

// action creators are generated for each case reducer function
export const { add, complete, toggle } = todosSlice.actions;

// reducer default export
export default todosSlice.reducer;
