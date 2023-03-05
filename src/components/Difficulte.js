import React from 'react';
import "../sass/scss/difficulte.scss";

import reactJSapprentissage from '../assets/img/reactJSapprentissage.png';
import javascriptXML from '../assets/img/javascriptXML.png';
import firebaseImg from '../assets/img/firebase.png';

import { Link } from 'react-router-dom';

function Difficulte() {
  return (
    <div className='difficulte'>
        <div className='textBoxDifficulte1'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.</p>
            <div><img className='imgIntro' src={reactJSapprentissage} alt="test2"/></div>
        </div>
        <div className='textBoxDifficulte2'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.</p>
            <div><img className='imgIntro' src={javascriptXML} alt="test2"/></div>
        </div>
        <div className='textBoxDifficulte3'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.</p>
            <div><img className='imgIntro' src={firebaseImg} alt="test2"/></div>
        </div>
        <div className='buttonSection'>
        <Link to="/app">
      <button className='buttonIntro' >Continuer</button>
       </Link>
      </div>
    </div>
  )
}

export default Difficulte