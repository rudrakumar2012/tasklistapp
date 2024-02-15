import React from "react";

function InputContainer({ inputVal, writetTask, addTask}) {
  return (
    <>
      <div className="flex w-full max-w-md mb-4">
        <input
          type="text"
          value={inputVal}
          placeholder="Enter task..."
          onChange={writetTask}
          className="block w-full p-2 mb-2 border rounded focus:outline-none focus:border-blue-500 bg-white"
        />
        <button
          onClick={addTask}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold px-4 h-11 rounded-full focus:outline-none focus:shadow-outline ml-2"
        >
          +
        </button>
      </div>
    </>
  );
}

export default InputContainer;
