import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../sass/scss/todoInterface.scss";

// Component Todo
export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  // Initialisation des states
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newDate, setNewDate] = useState(todo.date);

  // Fonction handleChange pour gérer la modification des inputs
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setNewTitle(e.target.value);
    } else if (e.target.name === "description") {
      setNewDescription(e.target.value);
    } else if (e.target.name === "date") {
      setNewDate(e.target.value);
    }
  };
  // Fonction handleEditSubmit pour gérer la soumission du formulaire de modification
  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleEdit(todo.id, newTitle, newDescription, newDate);
    setIsEditing(false);
  };
  // Rendu du component Todo
  return (
    <div className="todo">
      {/* Si on est en mode édition */}
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          {/* Input pour le titre */}
          <input
            type="text"
            name="title"
            value={newTitle}
            className="list"
            onChange={handleChange}
          />
          {/* Textarea pour le description */}
          <textarea
            type="text"
            name="description"
            value={newDescription}
            className="list"
            onChange={handleChange}
          />
          {/* Input pour le data */}
          <input
            type="text"
            name="date"
            value={newDate}
            className="list"
            onChange={handleChange}
          />
          {/* Boutons pour valider ou annuler la modification */}
          <div className="boutonModification">
            <button type="submit">Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          {/* Si on n'est pas en mode édition */}
          <form>
            {/* Input pour le titre, avec la possibilité d'avoir une ligne barrée si la tâche est complétée */}
            <input
              style={{ textDecoration: todo.completed && "line-through" }}
              type="text"
              value={`Tâche: ${todo.title}`}
              className="list"
              readOnly
            />
            {/* Textarea pour le description, avec la possibilité d'avoir une ligne barrée si la tâche est complétée */}
            <textarea
              style={{ textDecoration: todo.completed && "line-through" }}
              type="text"
              value={`Description: ${todo.description}`}
              className="list"
              readOnly
            />
            {/* Input pour le date, avec la possibilité d'avoir une ligne barrée si la tâche est complétée */}
            <input
              style={{ textDecoration: todo.completed && "line-through" }}
              type="text"
              value={`Date: ${todo.date}`}
              className="list"
              readOnly
            />
          </form>

          <div>
            {/* Bouton pour marquer une tâche comme complétée */}
            <button
              className="button-complete"
              onClick={() => toggleComplete(todo)}
            >
              <CheckCircleIcon id="i" />
            </button>
            {/* Bouton pour éditer une tâche */}
            <button className="button-edit" onClick={() => setIsEditing(true)}>
              <EditIcon id="i" />
            </button>
            {/* Bouton pour supprimer une tâche */}
            <button className="delete" onClick={() => handleDelete(todo.id)}>
              <DeleteIcon id="i" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
