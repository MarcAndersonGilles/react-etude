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

  const handleEdit = async (id, title, description) => {
    await updateDoc(doc(db, "todos", id), { title, description });
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
        <div className='todo_container'>
          {todos.map((todo) =>(
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