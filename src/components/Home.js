import React, { useState, useEffect } from "react";
////rfce

import { Link } from "react-router-dom";
import { FaTasks, FaCheck, FaRegCircle } from "react-icons/fa";

import Todo from "./Todo";
import AddTodo from "./AddTodo";
import Title from "./Title";

import "../sass/scss/home.scss";

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

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

  useEffect(() => {
    // Filter the todos based on the current filter state
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

  return (
    <section className="sectionHome">
      <div>
        <div>
          <Title />
        </div>
        <div>
          <AddTodo />
        </div>
        <div className="divTodoContainer">
          <h1 className="tachesH1">Mes tâches</h1>
          <div className="todoFiltre">
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
          <Link to="/conclusion">
            <button className="buttonApp">Continuer</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
