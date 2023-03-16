import React, { useReducer, useState } from "react";

export const TaskContext = React.createContext();

const taskReducer = (state, action) => {

  switch (action.type) {
    
    case "Add_Task":
      const id = Math.random() * 100;
      let task = { ...action.payload, id };
      return { ...state, taskList: [...state.taskList, task] };

    case "Update_Task":
      const updatedList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return { ...state, taskList: updatedList, selectedTask: {} };

    case "Delete_Task":
      const updatedTaskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, taskList: updatedTaskList, selectedTask: {} };

    case "Set_Selected_Task":
      return { ...state, selectedTask: action.payload };

    default:
      return state;
  }
};

const initialState = {
  taskList: [],
  selectedTask: {},
};

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [number, setNumber] = useState("");

  return (
    <>
      <TaskContext.Provider
        value={{
          state,
          dispatch,
          name,
          setName,
          email,
          setEmail,
          number,
          setNumber,
        }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
};
