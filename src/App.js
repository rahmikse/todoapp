import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { useTodoLayerValue } from "./context/TodoContext";
import Header from "./components/Header";
import "./App.css"

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content) {
      const newTodo = {
        id: Math.floor(Math.random() * 39399393),
        content,
        isCompleted: false,
      };

      dispatch({
        type: "ADD_TODO",
        payload: newTodo,
      });

      setContent("");
    }
  };
  const removeCompletedTodo =(todoId)=> {
    dispatch({
      type:"REMOVE_COMPLETED_TODO",
      payload:todoId
    })
  }

  return (
    
    <div className="container">
    <Header/>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={content}
          className="todo-input"
          placeholder="Add Todo "
          onChange={(event) => setContent(event.target.value)}
        />

        <button className="todo-button">Add</button>
        <button onClick={()=>removeCompletedTodo(todos.isCompleted)} className="todo-removeBtn" >Remove Completed</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
