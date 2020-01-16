import * as React from "react";

// stateless componente
const Seccion = ({
  claseSeccion,
  claseHeading,
  claseSub,
  titulo,
  subTexto,
  botonHref,
  botonTexto
}) => (
  <section className={claseSeccion}>
    {claseHeading === "main-heading" ? (
      <h1 className={claseHeading}>{titulo}</h1>
    ) : (
      <h2 className={claseHeading}>{titulo}</h2>
    )}
    <div className="w-container">
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
  </section>
);

export default Seccion;
