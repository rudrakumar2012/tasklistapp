import React from "react";
import Task from "./Task";

function TodoContainer({ tasks, deleteTask }) {
  return (
    <>
      {tasks.length >  0 && (
        <div className="bg-blue-100 p-2 w-full max-w-md rounded-md flex flex-col">
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default TodoContainer;
