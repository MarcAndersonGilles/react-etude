import React, { useState, useEffect } from 'react';
////rfce

import Todo from './Todo';
import AddTodo from './AddTodo';
import Title from './Title';

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
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'todos'));
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
    if (filter === 'completed') {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    } else if (filter === 'uncompleted') {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else {
      setFilteredTodos(todos);
    }
  }, [filter, todos]);

  const handleEdit = async (id, title, description, date) => {
    await updateDoc(doc(db, "todos", id), { title, description, date });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <section className='sectionHome'>
        
        <div>
          <div>
            <Title />
          </div>
          <div>
            <AddTodo />
          </div>
          <div className='todoFiltre'>
              <button className='filtre' onClick={() => setFilter('all')}>Toutes</button>
              <button className='filtre' onClick={() => setFilter('completed')}>Terminées</button>
              <button className='filtre' onClick={() => setFilter('uncompleted')}>Non terminées</button>
              

            </div>
        <div className='todo_container'>
          {filteredTodos.map((todo) =>(
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

    </section>
  );
}

export default Home