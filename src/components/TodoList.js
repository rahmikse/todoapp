import React from 'react';
import Todo from './Todo';
import "./../App.css"

const TodoList = ({ todos }) => {
  return (
    
    <div className="todo-list">
 
    {todos && todos.map((todo) => <Todo className="todo-ol" key={todo.id} todo={todo} />)}
 
    </div>  
    
    
  );
};

export default TodoList;