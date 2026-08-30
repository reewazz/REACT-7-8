import { useState } from "react";
import Button from "./Button";
import CommonSection from "./CommonSection";

export const TodoList = () => {
  const [message, setMessage] = useState(""); //for input box
  const [count, setcount] = useState(1); //for unique id
  const [Tasks, setTasks] = useState([]); //for object task
  const [editIndex, setEditIndex] = useState(null); //forediting



  console.log(Tasks,"tasks")

  
   const addTask = () => {
    if (editIndex !== null) {
      const newTaskList = Tasks.map((item, index) => {
        if (index === editIndex) {
          return { ...item, task: message };
        }
        return item;
      });

      setTasks(newTaskList);
      setMessage("");
      setEditIndex(null);
      return;
    }
    const newTask = {
      id: count,
      task: message,
      isCompleted: false,
    };
    console.log(count);
    setTasks([...Tasks, newTask]);
    setcount(count + 1);
    setMessage("");
  };

  const handleDelete = (indexToDelete) => {
    const newTaskList = Tasks.filter((item, index) => {
      return index !== indexToDelete;
    });

    setTasks(newTaskList);
  };

  const handleEdit = (indexToEdit) => {
    setMessage(Tasks[indexToEdit].task);
    setEditIndex(indexToEdit);
  };

  const completeTask = (indexToComplete) => {
    const newTaskList = Tasks.map((item, index) => {
      if (index === indexToComplete) {

        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }

      return item;
    });

    setTasks(newTaskList);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 m-1 ">
        <h1 className="font-semibold text-3xl">To-Do list</h1>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="border border-gray-400 p-1 rounded-2xl"
        />

        <div>
          {Tasks.map((item, index) => (
            <div
              className={`text-white p-2 rounded-xl flex items-center gap-2 justify-center ${item.isCompleted ? "bg-green-400" : "bg-red-400"}`}
              key={item.id}
            >
              <div>
                {item.task} -- {item.id}
              </div>

              <button
                className="bg-blue-500 p-2 rounded-2xl"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>

              <button
                className="bg-red-700 p-2 rounded-2xl"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>

              <button
                className="bg-green-400 p-2 rounded-2xl"
                onClick={() => completeTask(index)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>

        <button
          className="bg-blue-400 p-2 rounded-2xl text-white hover:scale-110 transition"
          onClick={() => {
            if (editIndex !== null) {
              const newTaskList = Tasks.map((item, index) => {
                if (index === editIndex) {
                  return { ...item, task: message };
                }
                return item;
              });

              setTasks(newTaskList);
              setMessage("");
              setEditIndex(null);
            } else {
              addTask();
            }
          }}
        >
          {editIndex !== null ? "Update Task" : "+ Add Task"}
        </button>

        <Button name={"Add todo"}/>
      </div>
      <CommonSection/>
    </>
  );
};
