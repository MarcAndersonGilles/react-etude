import React, { useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";

import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import "../sass/scss/todoApp.scss";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        description,
        date,
        completed: false,
      });
      setTitle("");
      setDescription(""); // Reset the description field after submitting the form
      setDate("");
    }
  };

  return (
    <form className="formeTodo" onSubmit={handleSubmit}>
      <div className="input_container">
        <div className="titreTodoApp">
          <h1>Todo App</h1>
        </div>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Entre la tâche..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text" // Add a new input element for the description
            placeholder="Description de la tâche..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date" // Add a new input element for the description
            placeholder="Entre la date de la tâche..."
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="custom-date-input"
          />
        </div>

        <div className="btn_container">
          <button className="buttonAddTodo">
            <IoIosAddCircleOutline className="iconButtonTodo" />
          </button>
        </div>
      </div>
    </form>
  );
}
