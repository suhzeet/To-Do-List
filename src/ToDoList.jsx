import React from "react";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Do exercise",
    "Feed a dog",
  ]);
  const [newTasks, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <>
      <div className=" text-center">
        <h1 className="text-white text-4xl">To-Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a Task.."
            value={newTasks}
            onChange={handleInputChange}
          />
          <button onClick={addTask} className=" bg-orange-400">
            Add
          </button>
        </div>
        <div>
          <ol>
            {tasks.map((task, index) => (
              <li className="my-4" key={index}>
                <span className=" text-white">{task}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
