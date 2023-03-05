import React from "react";
import "../sass/scss/difficulte.scss";

import labyrithn from "../assets/img/labyrithn.png";
import deploy from "../assets/img/deploy.png";
import design from "../assets/img/design.png";

import { Link } from "react-router-dom";

function Difficulte() {
  return (
    <div className="difficulte">
      <div className="textBoxDifficulte1">
        <ul className="UlclassPourLi">
          <li>
            Difficulté : Ne pas savoir par où commencer, surtout si c'Est la
            première fois qu'on fait une application. On peut être submergé par
            la quantité d'informations et de ressources disponibles.
          </li>
          <li>
            Solution : Établir un plan d'action clair pour le projet, en
            identifiant les tâches les plus importantes à accomplir en premier.
            Vous pouvez également vous fixer des objectifs à court terme pour
            vous aider à progresser régulièrement.
          </li>
        </ul>
        <div>
          <img className="imgDifficulte" src={labyrithn} alt="test2" />
        </div>
      </div>

      <div className="textBoxDifficulte2">
        <ul className="UlclassPourLi">
          <li>
            Difficulté : Le déploiement sur GitHub peut également être
            difficile, si c'est la première fois qu'on le fait. On peut
            rencontrer des difficultés pour configurer l'environnement de
            développement.
          </li>
          <li>
            {" "}
            Solution : Suivre des tutoriels étape par étape pour configurer
            l'environnement de développement et pour déployer l'application sur
            GitHub Pages.
          </li>
        </ul>
        <div>
          <img className="imgDifficulte" src={deploy} alt="test2" />
        </div>
      </div>

      <div className="textBoxDifficulte3">
        <ul className="UlclassPourLi">
          <li>
            Vous pouvez rencontrer des difficultés pour trouver un design qui
            convient à votre application todoApp. Cela peut prendre du temps
            pour trouver un design qui est à la fois fonctionnel et esthétique,
            surtout si vous êtes nouveau dans le domaine.
          </li>
          <li>
            Vous pouvez chercher des exemples d'applications similaires pour
            vous inspirer. Vous pouvez également utiliser des bibliothèques de
            composants ou des modèles prêts à l'emploi pour gagner du temps.
          </li>
        </ul>
        <div>
          <img className="imgDifficulte" src={design} alt="test2" />
        </div>
      </div>
      <div className="buttonSection">
        <Link to="/app">
          <button className="buttonIntro">Continuer</button>
        </Link>
      </div>
    </div>
  );
}

export default Difficulte;
