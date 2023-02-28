import React from 'react'

import { db } from "../firebase";
import { collection, addDoc} from "firebase/firestore";

import "../sass/scss/todoApp.scss";

export default function AddTodo(){
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState(""); 
    const [date, setDate] = React.useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== ""){
            await addDoc(collection(db, "todos"),{
                title,
                description,
                date, 
                completed:false,
            });
            setTitle("");
            setDescription(""); // Reset the description field after submitting the form
            setDate("");
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='input_container'>
                <input type="text"
                 placeholder="Entre la tâche..."
                  value={title}
                   onChange={(e) => setTitle(e.target.value)} />
                <input type="text" // Add a new input element for the description
                 placeholder="Description de la tâche..."
                  value={description}
                   onChange={(e) => setDescription(e.target.value)} />
                   <input type="text" // Add a new input element for the description
                 placeholder="Entre la date de la tâche..."
                  value={date}
                   onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='btn_container'>
            <button>Ajouter</button>
            </div>
        </form>
    );
}
