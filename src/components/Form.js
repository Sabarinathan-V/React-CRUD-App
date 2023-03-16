import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const Form = () => {
  const { state, dispatch, name, setName, email, setEmail, number, setNumber } = useContext(TaskContext);

  const addTask = (event) => {
    event.preventDefault();

    let id = state.selectedTask.id;

    if (state.selectedTask.id) {
      dispatch({ type: "Update_Task", payload: { id, name, email, number } });
    } else {
      name !== "" &&
        email !== "" &&
        number !== "" &&
        dispatch({ type: "Add_Task", payload: { name, email, number } });
    }

    setName("");
    setEmail("");
    setNumber("");

    // console.log(state);
  };

  return (
    <div className="App">
      
      <h2>React CRUD Operations - Builded by useContext and useReducer Hooks</h2>
      
      <form>
        <label>
          <b>Name</b> <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="FormInput"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          <b>Email</b> <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="FormInput"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          <b>Mobile Number</b> <br />
          <input
            type="text"
            placeholder="Enter Your Mobile number"
            className="FormInput"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </label>

        <br />
        
        <button id="submit" type="submit" onClick={(event) => addTask(event)}>
          {state.selectedTask.id ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};
