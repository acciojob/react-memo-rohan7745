import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [memoText, setMemoText] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, content: 'New todo' }]);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleMemoInputChange = (e) => {
    setMemoText(e.target.value);
  };

  const addMemoItem = () => {
    if (memoText.length > 5) {
      setTodos([...todos, { id: todos.length + 1, content: memoText }]);
      setMemoText('');
    }
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>React Memo App</h1>
      
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <span>Count: {count}</span>
        <button onClick={incrementCount}>Increment</button>
      </div>

      <div>
        <input type="text" value={memoText} onChange={handleMemoInputChange} />
        <button onClick={addMemoItem}>Submit</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
