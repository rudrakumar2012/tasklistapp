import React from "react";

function Task({task}) {
  return (
    <>
      <div className="flex justify-between items-center m-1">
        <span className="text-lg">{task}</span>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-red-600 mr-2"
          />
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Task;
