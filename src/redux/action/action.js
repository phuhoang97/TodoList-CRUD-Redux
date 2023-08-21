// actions.js
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_NEW_TASK = "SET_NEW_TASK";

export const setNewTask = (task) => ({
  type: SET_NEW_TASK,
  payload: task,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
