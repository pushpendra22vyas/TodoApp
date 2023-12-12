import React, { useState } from "react";

function Todo({setTodos}) {
    const initialValues = {
        id:'',
        task:''
    }

    const [todo, setTodo] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.length < 3) {
            alert("Please enter 3 or more then 3 characters");
            return
        }
        setTodos((prev)=>[...prev,todo])
        setTodo(initialValues)
    }
  return (
    <>
      <div className="flex flex-col gap-16">
        <h1 className="text-center text-3xl mt-6 p-3 font-serif">
          Todo - Application
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              className="h-14 sm:w-96 mr-5 w-[100%] rounded-md px-2 shadow-sm"
              value={todo.task}
              onChange={(e)=>setTodo({id:Date.now(),task:e.target.value})}
            />
            <button className="h-14 bg-cyan-400 sm:mt-0 mt-3 hover:bg-cyan-300 md:px-10 px-5 rounded-md text-black font-bold">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Todo;
