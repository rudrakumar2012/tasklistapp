function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-teal-500 to-green-500">
      <h1 className="mb-4 text-2xl font-bold text-white">Task List</h1>
      <div className="flex w-full max-w-md mb-4">
        <input type="text" placeholder="Enter task..." className="block w-full p-2 mb-2 border rounded focus:outline-none focus:border-blue-500 bg-white" />
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold px-4 h-11 rounded-full focus:outline-none focus:shadow-outline ml-2">+</button>
      </div>
      <div className="bg-blue-100 p-4 w-full max-w-md rounded-md flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg">Go to Gym</span>
          <div className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 mr-2" />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
