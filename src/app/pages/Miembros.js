import * as React from "react";
import App from "../components/App";
import "../static/styles/theme.css";

export default () => (
  <App>
    <div id="projects" className="section grey">
      <div className="w-container">
        <h1 className="heading-3">Miembros</h1>
        <div className="divider grey"></div>
        {/* primera fila */}
        <div className="w-row">
          <Miembro
            titulo={"Nombre"}
            subtitulo={"subtitulo"}
            img={"../static/images/undraw_profile_pic_ic5t.svg"}
          />
          <Miembro
            titulo={"Nombre"}
            subtitulo={"subtitulo"}
            img={"../static/images/undraw_profile_pic_ic5t.svg"}
          />
          <Miembro
            titulo={"Nombre"}
            subtitulo={"subtitulo"}
            img={"../static/images/undraw_profile_pic_ic5t.svg"}
          />
        </div>
        {/* segunda fila */}
        <div className="w-row">
          <Miembro
            titulo={"Nombre"}
            subtitulo={"subtitulo"}
            img={"../static/images/undraw_profile_pic_ic5t.svg"}
          />
          <Miembro
            titulo={"Nombre"}
            subtitulo={"subtitulo"}
            img={"../static/images/undraw_profile_pic_ic5t.svg"}
          />
          <Miembro
            titulo={"Nombre"}
            subtitulo={"subtitulo"}
            img={"../static/images/undraw_profile_pic_ic5t.svg"}
          />
        </div>
      </div>
    </div>
  </App>
);

const Miembro = ({ img, titulo, subtitulo }) => (
  <div className="w-col w-col-4 w-col-small-4">
    <div className="project-wrapper">
      <img
        src={img}
        sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
        alt={`foto de proyecto ${titulo}`}
      ></img>
      <div className="project-info">
        <h2 className="project-title">{titulo}</h2>
        <div>{subtitulo}</div>
      </div>
    </div>
  </div>
);
