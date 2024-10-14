import { Checkbox } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";

const Todolist = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // State to store tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete ADE assignment", completed: false },
    { id: 2, title: "Complete Economics assignment", completed: false },
    {
      id: 3,
      title: "Complete Computer Organization assignment",
      completed: false,
    },
  ]);

  // Function to handle task completion
  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to add a new task (for simplicity, using a static new task for now)
  const addNewTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `New Task ${tasks.length + 1}`,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="w-full flex items-start">
      {/* Left Section (Incomplete Tasks) */}
      <section id="left" className="w-1/2 flex flex-col items-center py-7">
        <h1 className="text-3xl mb-6 font-semibold">Tasks to do Today</h1>
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="card mb-6 h-32 main-border w-3/4 rounded-xl px-4 py-3 hover:shadow-lg transition"
          >
            <h1 className="text-2xl font-semibold">Task {index + 1}</h1>
            <div className="flex w-full h-16 items-center justify-between px-8 space-x-4">
              <p className="text-lg">{task.title}</p>
              <Checkbox
                {...label}
                checked={task.completed}
                onChange={() => handleTaskCompletion(task.id)}
                sx={{
                  color: orange[600],
                  "&.Mui-checked": {
                    color: orange[400],
                    transition: "color 0.3s ease", // Transition for smooth checkbox effect
                  },
                }}
              />
            </div>
          </div>
        ))}

        <div>
          <button
            className="bg-orange-500 text-white text-xl px-16 py-4 rounded-md mt-6 hover:bg-orange-600 transition"
            onClick={addNewTask}
          >
            Add Tasks
          </button>
        </div>
      </section>

      {/* Right Section (Completed Tasks) */}
      <section id="right" className="w-1/2 flex flex-col items-center py-7">
        <h1 className="text-3xl mb-6 font-semibold">Completed Tasks</h1>
        {tasks
          .filter((task) => task.completed)
          .map((task, index) => (
            <div
              key={task.id}
              className="card h-32 main-border w-3/4 rounded-xl px-4 py-3 mb-6"
            >
              <h1 className="text-2xl font-semibold">Task {index + 1}</h1>
              <div className="flex w-full h-14 items-center justify-between px-8">
                <p className="text-lg line-through">{task.title}</p>
                <Checkbox
                  checked
                  {...label}
                  sx={{
                    color: orange[600],
                    "&.Mui-checked": {
                      color: orange[400],
                      transition: "color 0.3s ease", // Transition for smooth checkbox effect
                    },
                  }}
                />
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Todolist;
