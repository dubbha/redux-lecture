history: {
  length: 10              // The number of entries in the history stack
  action: 'PUSH'          // The current action (PUSH, REPLACE, or POP)
  location: {}            // The current location object
  push(path, [state])     // Pushes a new entry onto the history stack
  replace(path, [state])  // Replaces the current entry on the history stack
  go(n)                   // Moves the pointer in the history stack by n entries
  goBack()                // Equivalent to go(-1)
  goForward()             // Equivalent to go(1)
  block(prompt)           // Prevents navigation (see the history docs)
}