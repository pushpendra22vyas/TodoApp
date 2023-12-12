import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from 'react-dnd-touch-backend';
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const isTouchDevice = 'ontouchstart' in window;
  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div className="h-screen w-screen">
        <div className="flex justify-center">
          <Todo setTodos={setTodos} />
        </div>
        <div className="flex items-center mt-6 p-10 sm:p-24">
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
