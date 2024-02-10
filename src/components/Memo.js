import React, { useState, useEffect } from 'react';

function Memo() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Effect to run when count changes
    console.log("Count changed:", count);
  }, [count]);

  const handleAddTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddMemoItem = () => {
    if (inputText.length > 5) {
      setTodos([...todos, inputText]);
      setInputText('');
    } else {
      alert("Text should be greater than 5 characters.");
    }
  };

  return (
    <div>
      <h1>Memo</h1>
      <div>
        <button onClick={handleAddTodo}>Add Todo</button>
        <span>{todos.length}</span>
      </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <span>{count}</span>
      </div>
      <div>
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInputChange} 
          placeholder="Enter text (greater than 5 characters)" 
        />
        <button onClick={handleAddMemoItem}>Submit</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Memo;
