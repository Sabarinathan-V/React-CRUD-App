import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const Table = () => {
  const { state, dispatch, setName, setEmail, setNumber } =
    useContext(TaskContext);
  const { taskList } = state;

  const updateTask = (task) => {
    dispatch({ type: "Set_Selected_Task", payload: task });
    setName(task.name);
    setEmail(task.email);
    setNumber(task.number);
  };

  const deleteTask = (task) => {
    dispatch({ type: "Delete_Task", payload: task });
    setName("")
    setEmail("")
    setNumber("")
  };

  return (
    <div>
      <table className="MyTable">
        <thead>
          <tr className="Table">
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList &&
            taskList.map((task, index) => {
              return (
                <tr key={task.id} className="Table">
                  <td>{index + 1}</td>
                  <td>{task.name}</td>
                  <td>{task.email}</td>
                  <td>{task.number}</td>
                  <td>
                    <button id="update_btn" type="button" onClick={() => updateTask(task)}>
                      Update
                    </button>
                    <button id="delete_btn" type="button" onClick={() => deleteTask(task)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
