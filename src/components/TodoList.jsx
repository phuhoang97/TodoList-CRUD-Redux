import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  updateTask,
  toggleTask,
  deleteTask,
  setNewTask,
} from "../redux/action/action";

const TodoList = () => {
  const newTask = useSelector((state) => state.newTask);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(
        addTask({
          id: Date.now(),
          text: newTask,
          completed: false,
        })
      );
      dispatch(setNewTask(""));
    }
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleUpdateClick = (task) => {
    setSelectedTask(task);
    dispatch(setNewTask(task.text));
  };

  const handleUpdateTask = () => {
    if (newTask.trim() !== "") {
      dispatch(
        updateTask({
          ...selectedTask,
          text: newTask,
        })
      );
      dispatch(setNewTask(""));
      setSelectedTask(null);
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        value={newTask}
        onChange={(e) => dispatch(setNewTask(e.target.value))}
        placeholder='Enter a new task'
      />
      <button onClick={selectedTask ? handleUpdateTask : handleAddTask}>
        {selectedTask ? "Update Task" : "Add Task"}
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => handleUpdateClick(task)}>Update</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
