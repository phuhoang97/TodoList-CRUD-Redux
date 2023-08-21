// reducer.js
import {
  ADD_TASK,
  UPDATE_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  SET_NEW_TASK,
} from "../action/action";

const initialState = {
  tasks: [],
  newTask: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_TASK:
      return {
        ...state,
        newTask: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
