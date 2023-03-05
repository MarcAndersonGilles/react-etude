import React from "react";
import "../sass/scss/conclusion.scss";

import conclusion from "../assets/img/conclusion.jpg";

function Conclusion() {
  return (
    <div className="conclusion">
      <div className="textBoxConclusion1">
        <ul className="UlclassPourLi">
          <li>
            En conclusion, la réalisation de cette application ToDoApp a été une
            expérience riche en enseignements pour moi. J'ai été confronté à
            plusieurs difficultés, notamment en matière de design, de
            déploiement sur GitHub et de savoir par quoi commencer.
          </li>
          <li>
            cette expérience m'a permis de développer mes compétences en
            développement web et de mieux comprendre les défis auxquels les
            développeurs peuvent être confrontés dans leur travail quotidien. Je
            suis fier du résultat final de l'application et je suis convaincu
            que cette expérience me sera utile dans mes futurs projets.
          </li>
        </ul>
        <div>
          <img className="imgConclusion" src={conclusion} alt="test2" />
        </div>
      </div>
    </div>
  );
}

export default Conclusion;
