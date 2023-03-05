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
            Difficulté : Il peut être difficile de savoir par où commencer,
            surtout si vous êtes nouveau dans le développement d'applications.
            Vous pouvez vous sentir submergé par la quantité d'informations et
            de ressources disponibles, et vous pouvez ne pas savoir comment
            organiser votre temps ou vos priorités.
          </li>
          <li>
            Solution : Établir un plan d'action clair pour votre projet, en
            identifiant les tâches les plus importantes à accomplir en premier.
            Vous pouvez également vous fixer des objectifs à court terme pour
            vous aider à progresser régulièrement. Enfin, vous pouvez chercher
            des ressources en ligne pour vous aider à apprendre les compétences
            dont vous avez besoin pour votre projet.
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
            difficile, surtout si vous n'êtes pas familier avec la plateforme.
            Vous pouvez rencontrer des difficultés pour configurer votre
            environnement de développement, pour intégrer correctement vos
            fichiers de code source avec GitHub, pour mettre à jour votre code
            et pour déployer votre application sur GitHub Pages.
          </li>
          <li>
            {" "}
            Solution : Vous pouvez suivre des tutoriels étape par étape pour
            configurer votre environnement de développement et pour déployer
            votre application sur GitHub Pages. Vous pouvez également chercher
            de l'aide sur des forums de développeurs ou sur des sites
            communautaires pour obtenir des conseils et des astuces.
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
