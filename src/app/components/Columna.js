import * as React from "react";

class Columna extends React.Component {
  render() {
    return (
      <div className="w-col w-col-4 w-col-small-4">
        <div className="project-wrapper">
          <a href="/project-page" className="project-wrapper w-inline-block">
            <img
              src={this.props.img}
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
              alt={`foto de proyecto ${this.props.titulo}`}
            ></img>
            <div className="project-info">
              <h3 className="project-title">{this.props.titulo}</h3>
              <div>{this.props.subtitulo}</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Columna;
