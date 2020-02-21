import * as React from "react";

const Columna = ({ img, titulo, subtitulo, github }) => (
  <div className="w-col w-col-4 w-col-small-4">
    <div className="project-wrapper">
      <a
        href={`/proyecto?titulo=${github}`}
        className="project-wrapper w-inline-block"
      >
        <img
          src={img}
          sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
          alt={`foto de proyecto ${titulo}`}
        ></img>
        <div className="project-info">
          <h3 className="project-title">{titulo}</h3>
          <div>{subtitulo}</div>
        </div>
      </a>
    </div>
  </div>
);

export default Columna;
