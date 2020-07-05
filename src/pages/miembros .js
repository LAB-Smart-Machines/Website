import * as React from "react";
import App from "../components/App";
import profile_pic from "../images/undraw_profile_pic_ic5t.svg";
import INTEGRANTES from "../../../INTEGRANTES.json";

String.prototype.aSentencia = function() {
  return this.match(/[A-zÀ-ú]+/gi)
    .map(function(word, index) {
      return word.length > 2
        ? word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
        : word;
    })
    .join(" ");
};

export default () => (
  <App>
    <div id="projects" className="section grey">
      <div className="w-container">
        <h1 className="heading-3">Miembros</h1>
        <div className="divider grey"></div>
        <h2 className="h2-miembros">Directiva</h2>
        <div className="w-row">
          {INTEGRANTES.directiva.map((miembro, i) => {
            return (
              <MiembroConFotos
                key={i}
                titulo={miembro.nombre}
                subtitulo={miembro.titulo.aSentencia()}
                img={profile_pic}
              />
            );
          })}
        </div>
        <div className="divider grey"></div>
        <h2 className="h2-miembros">Jefes</h2>
        <div className="w-row">
          {INTEGRANTES.jefes.map((miembro, i) => {
            return (
              <MiembroSinFotos
                key={i}
                titulo={miembro.nombre}
                subtitulo={miembro.titulo.aSentencia()}
              />
            );
          })}
        </div>
      </div>
    </div>
  </App>
);

const MiembroConFotos = ({ img, titulo, subtitulo }) => (
  <div className="w-col w-col-4 w-col-small-4 miembros">
    <div className="project-wrapper">
      <img src={img} alt={`foto de proyecto ${titulo}`}></img>
      <div className="miembro-info">
        <h2 className="miembro-title">{titulo}</h2>
        <div>{subtitulo}</div>
      </div>
    </div>
  </div>
);

const MiembroSinFotos = ({ img, titulo, subtitulo }) => (
  <div className="w-col w-col-4 w-col-small-4 miembros">
    <div className="project-wrapper">
      <div className="miembro-info">
        <h2 className="miembro-title">{titulo}</h2>
        <div>{subtitulo}</div>
      </div>
    </div>
  </div>
);
