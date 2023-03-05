import React from "react";
import "../sass/scss/footer.scss";
import { IconContext } from "react-icons";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
function Footer() {
  return (
    <IconContext.Provider value={{ size: "5em" }}>
      <div className="footerPrincipal">
        <div className="footerH1">
          <h1>Application de gestion de tâche avec React et Firebase</h1>
        </div>
        <div className="footerTexte">
          <p>
            L'application m'a permis d'appendre les bases de React JS et
            Firebase.
          </p>
          <p>
            En utilisant Node.js en tant que serveur, Firebase pour le backend
            et React JS pour le frontend.
          </p>
          <p>
            Ce projet a été fait pour mon projet finale en tant finissant en
            intégration multimédia.
          </p>
        </div>
        <div className="iconsFooter">
          <a
            href="https://github.com/MarcAndersonGilles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="mailto:marcandersongilles@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail />
          </a>
          <a
            href="https://www.linkedin.com/in/marc-anderson-gilles-87331b183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>

        <div>
          <p>Copyright @2023 Tous droits réservés</p>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Footer;
