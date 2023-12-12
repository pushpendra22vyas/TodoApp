import React from "react";
import TodoCards from "./TodoCards";

function TodoList({todos, setTodos}) {
  const handleReorder = (draggedIndex, targetIndex) => {
    const updatedTodos = [...todos];
    const [draggedTodo] = updatedTodos.splice(draggedIndex, 1);
    updatedTodos.splice(targetIndex, 0, draggedTodo);
    setTodos(updatedTodos);
  };
  return (
    <div className="container ml-auto mr-auto flex flex-wrap items-start">
      {todos && todos.length > 0 ? (todos.map((todo, index) => (
        <div
          key={todo.id}
          className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
        >
          <TodoCards
            id={todo.id}
            text={todo.task}
            index={index}
            onReorder={handleReorder}
          />
        </div>
      ))) : (
        <div className="mx-auto">
            <h1 className="text-2xl font-serif">No, Task is available.Please Add a new task!</h1>
        </div>
      )}

    </div>
  );
}

export default TodoList;
