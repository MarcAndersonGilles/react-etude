import React from 'react'

import { db } from "../firebase";
import { collection, addDoc} from "firebase/firestore";

import "../sass/scss/todoApp.scss";

export default function AddTodo(){
    const [title, setTitle] = React.useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== ""){
            await addDoc(collection(db, "todos"),{
                title,
                completed:false,
            });
            setTitle("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='input_container'>
                <input type="text"
                 placeholder="Entre la tâche..."
                  value={title}
                   onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='btn_container'>
            <button>Ajouter</button>
            </div>
        </form>
    );
}