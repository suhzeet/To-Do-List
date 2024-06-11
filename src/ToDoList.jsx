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

  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks((task) => [...task, newTasks]);
      setNewTasks("");
    } else alert("Please Enter a Task !!");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i != index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="text-center mx-auto max-w-2xl px-8 text-2xl">
        <div className="w-full">
          <h1 className="text-white text-5xl my-8">To-Do List</h1>
          <div className="flex gap-2 flex-col mb-12 sm:flex-row">
            <input
              type="text"
              placeholder="Enter a Task.."
              className=" rounded-md py-1 px-3 w-full"
              value={newTasks}
              onChange={handleInputChange}
            />
            <button
              onClick={addTask}
              className=" bg-green-300 py-1 px-3 rounded-md hover:bg-green-600 hover:text-white transition-all"
            >
              Add
            </button>
          </div>
          <div>
            <ol>
              {tasks.map((task, index) => (
                <li
                  className="my-4 flex flex-col gap-2 justify-normal  items-end sm:items-center sm:flex-row  mb-6 "
                  key={index}
                >
                  <span className="flex items-start bg-slate-300  px-4 py-2 rounded-md w-full">
                    {index + 1}. {task}
                  </span>
                  <div className=" flex  gap-2 items-start">
                    <button
                      className=" hover:opacity-70 bg-blue-400 py-0.5 px-1.5 rounded-full self-start"
                      onClick={() => moveTaskUp(index)}
                    >
                      👆🏻
                    </button>
                    <button
                      className=" hover:opacity-70 bg-blue-400 py-0.5 px-1.5 rounded-full self-start"
                      onClick={() => moveTaskDown(index)}
                    >
                      👇
                    </button>
                    <button
                      className=" hover:opacity-70 bg-red-400 py-0.5 px-1.5 rounded-md text-white col-span-2 self-start"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
