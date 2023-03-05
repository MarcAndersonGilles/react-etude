// Import des modules React nécessaires pour le fonctionnement de l'application
import React, { useState, useEffect } from "react";
////rfce

// Import des composants et des icônes nécessaires pour le fonctionnement de l'application
import { Link } from "react-router-dom";
import { FaTasks, FaCheck, FaRegCircle } from "react-icons/fa";

import Todo from "./Todo";
import AddTodo from "./AddTodo";
import Title from "./Title";

import "../sass/scss/home.scss";
// Import des fonctions Firebase nécessaires pour le fonctionnement de l'application
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

// Définition du composant Home
function Home() {
  // Définition des états nécessaires pour le fonctionnement de l'application
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Utilisation de useEffect pour récupérer les données des todos depuis la base de données Firestore
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);
  // Utilisation de useEffect pour filtrer les todos en fonction du filtre actuel
  useEffect(() => {
    if (filter === "completed") {
      setFilteredTodos(
        todos
          .filter((todo) => todo.completed)
          .sort((a, b) => a.date.localeCompare(b.date))
      );
    } else if (filter === "uncompleted") {
      setFilteredTodos(
        todos
          .filter((todo) => !todo.completed)
          .sort((a, b) => a.date.localeCompare(b.date))
      );
    } else {
      setFilteredTodos(todos);
    }
  }, [filter, todos]);
  // Définition des fonctions nécessaires pour le fonctionnement de l'application
  const handleEdit = async (id, title, description, date) => {
    await updateDoc(doc(db, "todos", id), { title, description, date });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  // Rendu du composant Home
  return (
    <section className="sectionHome">
      <div>
        <div>
          {/* Composant pour ajouter titre */}
          <Title />
        </div>
        <div>
          {/* Composant pour ajouter un nouveau todo */}
          <AddTodo />
        </div>
        <div className="divTodoContainer">
          <h1 className="tachesH1">Mes tâches</h1>
          <div className="todoFiltre">
            {/* Boutons pour filtrer les todos en fonction de leur état */}
            <button className="filtre" onClick={() => setFilter("all")}>
              <FaTasks />
            </button>
            <button className="filtre" onClick={() => setFilter("completed")}>
              <FaCheck />
            </button>
            <button className="filtre" onClick={() => setFilter("uncompleted")}>
              <FaRegCircle />
            </button>
          </div>

          <div className="todo_container">
            <div className="todo_background">
              {filteredTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="buttonSection">
          <Link to="/react-etude/conclusion">
            <button className="buttonApp">Continuer</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
