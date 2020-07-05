import * as React from "react";
import App from "../components/App";
import Columna from "../components/Columna";
import Seccion from "../components/Seccion";

import PROYECTOS from "../../../PROYECTOS.json";
import CONTENIDO from "../../../CONTENIDO.json";

export default () => (
  <App>
    <Seccion
      claseSeccion={"header"}
      claseHeading={"main-heading"}
      claseSub={"main-subtitle"}
      titulo={CONTENIDO.titulo_principal}
      subTexto={CONTENIDO.subtexto_principal.join(" ")}
    />
    <Seccion
      claseSeccion={"section"}
      claseHeading={"heading"}
      claseSub={"text-block"}
      titulo={CONTENIDO.titulo_primera_seccion}
      subTexto={CONTENIDO.subtexto_primera_seccion.join(" ")}
    />

    <Seccion
      claseSeccion={"about-section"}
      claseHeading={"heading-2"}
      claseSub={"about-text"}
      titulo={CONTENIDO.titulo_segunda_seccion}
      subTexto={
        <div
          dangerouslySetInnerHTML={{
            __html: CONTENIDO.subtexto_segunda_seccion.join(" "),
          }}
        ></div>
      }
      botonHref={"#contact"}
      botonTexto={"Contacto"}
    />

    <div id="projects" className="section grey">
      <div className="w-container">
        <h2 className="heading-3">Proyectos</h2>
        <div className="divider grey"></div>
        {aDiferenteFilas(PROYECTOS)}
      </div>
    </div>
  </App>
);

const aDiferenteFilas = (data) => {
  let tables = [];
  let fila = [];

  data.proyecto.forEach((row, i) => {
    fila.push(row);
    if ((i + 1) % 3 === 0) {
      // nueva fila
      tables.push(nuevaFila(fila));
      fila = [];
    }
  });
  fila.length && tables.push(nuevaFila(fila));
  return tables;
};

//TODO: <!-- Tener github como requerido? -->
const nuevaFila = (data) => {
  return (
    <div className="w-row">
      {data.map((proyecto, i) => {
        return (
          <Columna
            key={i}
            titulo={proyecto.titulo}
            subtitulo={proyecto.subtitulo}
            img={
              proyecto.img
                ? require("../images/" + proyecto.img)
                : require("../images/undraw_scrum_board_cesn.png")
            }
            github={proyecto.github}
          />
        );
      })}
    </div>
  );
};
