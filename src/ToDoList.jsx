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
      <div className="text-center mx-auto max-w-lg px-8">
        <div className="w-full">
          <h1 className="text-white text-4xl my-8">To-Do List</h1>
          <div className="flex gap-2 mb-6">
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
                  className="my-4 flex justify-between items-center bg-slate-300 px-4 py-2 rounded-md"
                  key={index}
                >
                  <span>
                    {index + 1}. {task}
                  </span>
                  <div className="flex gap-2">
                    <button
                      className=" hover:opacity-70 bg-red-400 py-0.5 px-1.5 rounded-md text-white"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                    <button
                      className=" hover:opacity-70 bg-blue-400 py-0.5 px-1.5 rounded-full"
                      onClick={() => moveTaskUp(index)}
                    >
                      👆🏻
                    </button>
                    <button
                      className=" hover:opacity-70 bg-blue-400 py-0.5 px-1.5 rounded-full"
                      onClick={() => moveTaskDown(index)}
                    >
                      👇
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
