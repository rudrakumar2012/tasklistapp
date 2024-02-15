import React from "react";
import Task from "./Task";

function TodoContainer({tasks}) {
  return (
    <>
      <div className="bg-blue-100 p-2 w-full max-w-md rounded-md flex flex-col">
        {tasks.map((task, index)=> {
          return (
            <Task key={index} task={task}/>
          )
        })}
      </div>
    </>
  );
}

export default TodoContainer;
