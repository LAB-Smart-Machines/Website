import * as React from "react";
import Link from "next/link";

const Columna = ({ img, titulo, subtitulo }) => (
  <div className="w-col w-col-4 w-col-small-4">
    <div className="project-wrapper">
      <a
        href={`/proyecto?titulo=${titulo.toUpperCase()}`}
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

// https://nextjs.org/learn/basics/create-dynamic-pages/passing-data
const PostLink = props => (
  <Link href={`/proyecto?titulo=${props.titulo.toUpperCase()}`}>
    <a className="nav-link w-nav-link">{props.titulo}</a>
  </Link>
);
