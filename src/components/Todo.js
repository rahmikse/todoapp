import React from "react";
import { useTodoLayerValue } from "../context/TodoContext";
import clsx from "clsx";
import { GrFormClose } from "react-icons/gr";
const Todo = ({ todo }) => {
  const [{}, dispatch] = useTodoLayerValue();
  const removeTodo = (todoId) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
    });
  };
  const completeTodo = (todoId) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todoId,
    });
  };

  const todoCompletedStyle = clsx({
    ["todo-row"]: true,
    ["completed"]: todo.isCompleted,
  });
  return (
    <div className={todoCompletedStyle}>
      <div onClick={() => completeTodo(todo.id)}>
        {" "}
        
          <li  key={todo.id}>{todo.content}</li>
        
      </div>
      <div className="todo-icon" onClick={() => removeTodo(todo.id)}>
        <GrFormClose />
      </div>
    </div>
  );
};

export default Todo;
