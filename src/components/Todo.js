import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../sass/scss/todoInterface.scss";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description); // Add a new state variable for the description
  const [newDate, setNewDate] = useState(todo.date);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setNewTitle(e.target.value);
    } else if (e.target.name === "description") {
      // Update the newDescription state variable when the description input changes
      setNewDescription(e.target.value);
    } else if (e.target.name === "date") {
      // Update the newDate state variable when the date input changes
      setNewDate(e.target.value);
    }
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleEdit(todo.id, newTitle, newDescription, newDate); // Pass the updated title and description to the handleEdit function
    setIsEditing(false);
  };
  return (
    <div className="todo">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="title"
            value={newTitle}
            className="list"
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="description"
            value={newDescription}
            className="list"
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            value={newDate}
            className="list"
            onChange={handleChange}
          />
          <div className="boutonModification">
            <button type="submit">Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <form>
            <input
              style={{ textDecoration: todo.completed && "line-through" }}
              type="text"
              value={`Tâche: ${todo.title}`}
              className="list"
              readOnly
            />

            <textarea
              style={{ textDecoration: todo.completed && "line-through" }}
              type="text"
              value={`Description: ${todo.description}`}
              className="list"
              readOnly
            />
            <input
              style={{ textDecoration: todo.completed && "line-through" }}
              type="text"
              value={`Date: ${todo.date}`}
              className="list"
              readOnly
            />
          </form>

          <div>
            <button
              className="button-complete"
              onClick={() => toggleComplete(todo)}
            >
              <CheckCircleIcon id="i" />
            </button>
            <button className="button-edit" onClick={() => setIsEditing(true)}>
              <EditIcon id="i" />
            </button>
            <button className="delete" onClick={() => handleDelete(todo.id)}>
              <DeleteIcon id="i" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
