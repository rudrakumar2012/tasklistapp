import { useState } from "react";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [tasks, setTasks] = useState([]);

  function writeTask(e) {
    setInputVal(e.target.value);
  }

  function addTask() {
    if (inputVal != "") {
      setTasks((prevTasks) => [...prevTasks, inputVal]);
      setInputVal("");
    }
  }

  function deleteTask(taskIndex){
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-roboto bg-gradient-to-br from-blue-500 via-teal-500 to-green-500">
      <h1 className="mb-4 text-2xl font-bold text-white">Task List</h1>
      <InputContainer
        inputVal={inputVal}
        writetTask={writeTask}
        addTask={addTask}
      />
      <TodoContainer tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
