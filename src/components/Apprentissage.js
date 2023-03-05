import React from "react";
import "../sass/scss/apprentissages.scss";

import reactJSapprentissage from "../assets/img/reactJSapprentissage.png";
import javascriptXML from "../assets/img/javascriptXML.png";
import firebaseImg from "../assets/img/firebase.png";

import { Link } from "react-router-dom";

function Apprentissage() {
  return (
    <div className="apprentissagesSections">
      <div className="apprentissages">
        <div className="textBoxApprentissage1">
          <ul className="UlclassPourLi">
            <li>
              React est une bibliothèque JavaScript utilisée pour construire des
              interfaces utilisateur interactives et réactives.
            </li>
            <li>
              Il permet de diviser une application en composants réutilisables,
              ce qui facilite la maintenance et la mise à jour.
            </li>
            <li>
              React permet d'optimiser les performances de l'application en
              réduisant le nombre de manipulations du DOM.
            </li>
          </ul>
          <div>
            <img className="imgIntro" src={reactJSapprentissage} alt="test2" />
          </div>
        </div>

        <div className="textBoxApprentissage2">
          <ul className="UlclassPourLi">
            <li>
              JavaScript est un langage de programmation utilisé pour ajouter de
              l'interactivité aux pages web.
            </li>
            <li>
              Il peut être utilisé pour manipuler le contenu HTML et CSS d'une
              page en temps réel, ce qui permet de créer des interfaces
              utilisateur dynamiques.
            </li>
            <li>
              Les frameworks et les bibliothèques JavaScript, comme React,
              facilitent la construction d'applications web complexes en
              fournissant des fonctionnalités prêtes à l'emploi.
            </li>
          </ul>
          <div>
            <img className="imgIntro" src={javascriptXML} alt="test2" />
          </div>
        </div>

        <div className="textBoxApprentissage3">
          <ul className="UlclassPourLi">
            <li>
              Firebase est une plateforme de développement d'applications
              mobiles et web qui fournit des outils pour la création
              d'applications en temps réel et la gestion des données.
            </li>
            <li>
              Elle permet de stocker des données en temps réel dans le cloud et
              de synchroniser ces données entre les différents utilisateurs de
              l'application.
            </li>
            <li>
              Firebase fournit des outils pour l'authentification des
              utilisateurs, l'hébergement de fichiers, et bien plus encore.
            </li>
          </ul>
          <div>
            <img className="imgIntro" src={firebaseImg} alt="test2" />
          </div>
        </div>
      </div>
      <div className="buttonSection">
        <Link to="/react-etude/difficulte">
          <button className="buttonIntro">Continuer</button>
        </Link>
      </div>
    </div>
  );
}

export default Apprentissage;
