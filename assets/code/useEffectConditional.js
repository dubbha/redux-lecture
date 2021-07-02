useEffect(() => {
  console.log(`count changed: ${count}`);
}, [count]);   // dependency array: only fire when count changes