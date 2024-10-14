import { Checkbox, Button } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";

const Todolist = () => {
  const [tasks, setTasks] = useState([]); // Store tasks
  const [completedTasks, setCompletedTasks] = useState([]); // Store completed tasks
  const [newTask, setNewTask] = useState(""); // New task input

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { task: newTask, id: tasks.length + 1 }]);
      setNewTask(""); // Clear input field
    }
  };

  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    setCompletedTasks([...completedTasks, taskToComplete]); // Move task to completed
    setTasks(tasks.filter((_, i) => i !== index)); // Remove from pending
  };

  const deleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index)); // Remove from completed
  };

  return (
    <div className="w-full flex items-start">
      <section id="left" className="w-1/2 flex flex-col items-center py-10">
        <h1 className="text-3xl font-semibold mb-4">Pending Tasks</h1>
        {tasks.map((task, index) => (
          <div
            key={index}
            className="card mb-6 h-32 main-border w-3/4 rounded-xl px-3 py-2 hover:shadow-lg transition"
          >
            <h1 className="text-2xl font-semibold">Task {task.id}</h1>
            <div className="flex w-full h-16 items-center justify-between px-8 space-x-4">
              <p className="text-lg">{task.task}</p>
              <Checkbox
                sx={{
                  color: orange[600],
                  "&.Mui-checked": { color: orange[400] },
                }}
                onClick={() => completeTask(index)}
              />
            </div>
          </div>
        ))}

        {/* Input field and Add Task button */}
        <div className="flex space-x-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            className="border border-gray-400 px-4 py-2 rounded-md"
          />
          <Button
            onClick={addTask}
            variant="contained"
            sx={{
              backgroundColor: orange[600],
              "&:hover": { backgroundColor: orange[400] },
            }}
          >
            Add Task
          </Button>
        </div>
      </section>

      <section id="right" className="w-1/2 flex flex-col items-center py-10">
        <h1 className="text-3xl font-semibold mb-4">Completed Tasks</h1>
        {completedTasks.map((task, index) => (
          <div
            key={index}
            className="card h-32 main-border w-3/4 rounded-xl px-3 py-2 mb-6"
          >
            <h1 className="text-2xl font-semibold">Task {task.id}</h1>
            <div className="flex w-full h-14 items-center justify-between px-8">
              <p className="text-lg line-through">Completed: {task.task}</p>
              <div className="flex space-x-4">
                <Checkbox
                  checked
                  sx={{
                    color: orange[600],
                    "&.Mui-checked": { color: orange[400] },
                  }}
                />
                <Button
                  onClick={() => deleteTask(index)}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Todolist;
