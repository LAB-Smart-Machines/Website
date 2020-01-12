import * as React from "react";

class Seccion extends React.Component {
  render() {
    const {
      claseSeccion,
      claseHeading,
      claseSub,
      titulo,
      subTexto,
      botonHref,
      botonTexto
    } = this.props;
    return (
      <div className={claseSeccion}>
        <div className="w-container">
          <h2 className={claseHeading}>{titulo}</h2>
          <div className="divider grey"></div>

          <p className={claseSub}>{subTexto}</p>
          {botonHref ? (
            <a href={botonHref} className="button">
              {botonTexto}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Seccion;
