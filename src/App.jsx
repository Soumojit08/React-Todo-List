import React from "react";
import Navbar from "./components/Navbar";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex w-full">
          <Todolist />
        </div>
      </div>
    </>
  );
};

export default App;
