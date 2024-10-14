import React from "react";
import Navbar from "./components/Navbar";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center">
          <Todolist />
        </div>
      </div>
    </>
  );
};

export default App;
