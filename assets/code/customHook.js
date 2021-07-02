import React, { useState } from 'react';

// Custom Hook!
const useAnswer = () => {  // name starts with 'use'
  const [answer] = useState(42);  // calls other hooks
  return answer;
}

export const Component = () => {
  const answer = useAnswer();  // use custom hook
  return <div>Answer: {answer}</div>;
};