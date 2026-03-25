import React, { useState } from 'react';
import './style.css';

export default function TodoList() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: todoList.length + 1,
        text: input,
        isCompleted: false,
      },
    ]);
    setInput('');
  };
  const handleDelete = (todoId) => {
    const result = todoList.filter((item) => item.id !== todoId);
    setTodoList(result);
  };

  const handleCompletionToggle = (todoId) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todoId) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList?.map((todo) => {
          console.log(todo);
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                onChange={() => handleCompletionToggle(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
