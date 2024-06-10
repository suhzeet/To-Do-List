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
      <div className="grid justify-center mx-auto max-w-2xl">
        <div className="w-full">
          <h1 className="text-white text-4xl my-8 border-solid border-b-2 border-gray-400">
            To-Do List
          </h1>
          <div>
            <input
              type="text"
              placeholder="Enter a Task.."
              className=" rounded-l-md py-1 px-3"
              value={newTasks}
              onChange={handleInputChange}
            />
            <button
              onClick={addTask}
              className=" bg-orange-400 py-1 px-3 rounded-r-md"
            >
              Add
            </button>
          </div>
          <div>
            <ol>
              {tasks.map((task, index) => (
                <li className="my-4 flex justify-between" key={index}>
                  <span className=" text-white">
                    {index + 1}. {task}
                  </span>
                  <div className="flex gap-2">
                    <button
                      className=" hover:opacity-70"
                      onClick={() => deleteTask(index)}
                    >
                      ❎
                    </button>
                    <button
                      className=" hover:opacity-70"
                      onClick={() => moveTaskUp(index)}
                    >
                      👆🏻
                    </button>
                    <button
                      className=" hover:opacity-70"
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
