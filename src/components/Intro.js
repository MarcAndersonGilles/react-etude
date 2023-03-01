import React from 'react';
import "../sass/scss/intro.scss";

import javascript from '../assets/img/javascript.png';
import react from '../assets/img/react.png';
import node from '../assets/img/node.png';
import html from '../assets/img/html.png';
import firebase from '../assets/img/firebase.png';
import css from '../assets/img/css.png';


function Intro() {
  return (
    <div className='intro'>
      <div className='introPresentation'>
        <h1>Bienvenue</h1>
        <h2>Découvre mon application de gestion de tâches</h2>
        <button>Débuter</button>
      </div>
      <div className='introImagesSection'>
        <div><img className='imgIntro' src={javascript} alt="test2"/></div>
        <div><img className='imgIntro' src={react} alt="test2"/></div>
        <div><img className='imgIntro' src={node} alt="test2"/></div>
        <div><img className='imgIntro' src={html} alt="test2"/></div>
        <div><img className='imgIntro' src={firebase} alt="test2"/></div>
        <div><img className='imgIntro' src={css} alt="test2"/></div>

      
      
      
      </div>
    </div>
  )
}

export default Intro;