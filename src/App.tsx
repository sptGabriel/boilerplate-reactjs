import React from "react";

function App() {
  return (
    <div className="App h-full w-full bg-blue-500">
      <header className="flex items-center bg-blue-200 flex-col">
        <p className="flex items-center w-full justify-center bg-red-600 py-4 px-4 text-xl font-medium text-white">
          Welcome!!!!!!
        </p>
        <a
          className="flex items-center w-full justify-center bg-green-400 py-4 px-4 text-xl font-medium"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
