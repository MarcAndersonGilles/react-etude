import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../sass/scss/todoApp.scss";

export default function AddTodo() {
  // Les states qui vont contenir les données entrées dans le formulaire
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  // La fonction qui sera appelée lorsque le formulaire sera soumis
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      // Ajouter un nouveau document dans la collection "todos" de la base de données Firestore
      await addDoc(collection(db, "todos"), {
        title,
        description,
        date,
        completed: false,
      });
      setTitle(""); // Réinitialiser le champ de description après la soumission du formulaire
      setDescription(""); // Réinitialiser le champ de description après la soumission du formulaire
      setDate(""); // Réinitialiser le champ de description après la soumission du formulaire
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
            type="text" // Ajouter un nouveau champ de saisie pour la titre
            placeholder="Entre la tâche..."
            value={title}
            //Le gestionnaire d'événements onChange appelle la fonction setTitle() à chaque fois
            // que l'utilisateur modifie le champ de saisie, ce qui met à jour l'état
            // du composant avec la valeur saisie par l'utilisateur.
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text" // Ajouter un nouveau champ de saisie pour la description
            placeholder="Description de la tâche..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date" // Add a new input element for the date
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
