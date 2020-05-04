import * as React from "react";
import App from "../components/App";
import Columna from "../components/Columna";
import Seccion from "../components/Seccion";

import telemetry from "../images/ctic_cansat_telemetry.jpeg";
import rover from "../images/ctic_cansat_rover.jpeg";
import globo_estratosferico from "../images/ctic_GLOBO_ESTRATOSFÉRICO.jpeg";
import warbot from "../images/ctic_warbot.jpeg";
import cohetes from "../public/static/images/ctic_cohetes.jpeg";
import PROYECTOS from "../../../PROYECTOS.json";

export default () => (
  <App>
    <Seccion
      claseSeccion={"header"}
      claseHeading={"main-heading"}
      claseSub={"main-subtitle"}
      titulo={"Laboratorio Smart Machines"}
      subTexto={subtitulo_texto}
    />
    <Seccion
      claseSeccion={"section"}
      claseHeading={"heading"}
      claseSub={"text-block"}
      titulo={"Mision"}
      subTexto={mision_texto}
    />

    <Seccion
      claseSeccion={"about-section"}
      claseHeading={"heading-2"}
      claseSub={"about-text"}
      titulo={"Historia"}
      subTexto={<Historia_Texto />}
      botonHref={"#contact"}
      botonTexto={"Contacto"}
    />

    <div id="projects" className="section grey">
      <div className="w-container">
        <h2 className="heading-3">Proyectos</h2>
        <div className="divider grey"></div>
        {/* primera fila */}

        {PROYECTOS.proyecto.map((proyecto, i) => {
          return i % 4 > 0 ? (
            <Columna
              key={i}
              titulo={proyecto.titulo}
              subtitulo={proyecto.subtitulo}
              img={require("../images/" + proyecto.img + ".jpeg")}
              github={proyecto.github}
            />
          ) : (
            <div className="w-row"></div>
          );
        })}
      </div>
    </div>
  </App>
);

// TODO: put this text into json style
const mision_texto = `El laboratorio de investigación Smart machines es un centro cuyo
propósito es desarrollar investigación básica y aplicada en el campo
aeroespacial y robótica aplicada, que contribuya a los esfuerzos de la
comunidad científica para impulsar las fronteras del conocimiento y su
aplicación en el sector productivo y social del país, además de la
formación de recursos humanos de alto nivel, el desarrollo y
transferencia de tecnología, y la contribución de uno cultura
científica y tecnológica en la sociedad peruana.`;

const subtitulo_texto = `Smart Machines es un laboratorio de investigación de excelencia, con
liderazgo nacional y reconocimiento internacional creciente en el
campo aeroespacial y robótica aplicada, ocupando un lugar central en
el desarrollo de la ciencia y tecnología de nuestro país.`;

const Historia_Texto = () => (
  <React.Fragment>
    El 22 de setiembre del 2011 un grupo de 10 estudiantes de la{" "}
    <mark>
      <a className="mark-a" href="https://www.uni.edu.pe/">
        Universidad Nacional de Ingeniería
      </a>
    </mark>{" "}
    se juntan con el propósito de realizar proyectos multidisciplinarios. Para
    el logro de ello deciden formar el capítulo de AESS (AEROSPACIAL AND
    ELECTRONIC SYSTEM SOCIETY), perteneciente a la sociedad IEEE. Es así como en
    el evento de UNI-empresa, este grupo se contacta con Fredy Calle y Renato
    Miyagusuku, investigadores que pertenecían al proyecto satelital Chasqui I,
    quienes aceptan brindar asesorías y capacitaciones, dentro del área
    Aeroespacial. En enero del 2012, Fredy les presenta la idea de incursionar
    al mundo tecnológico a través de la metodología{" "}
    <a className="mark-a" href="http://www.cansatcompetition.com/">
      <mark>CANSAT</mark>
    </a>
    . Tomado la experiencia que compartieron en Japón. <br />
    <br />
    Es de esta forma que se da inicio a los primeros proyectos: el perfilador de
    vientos, Rover 1 (Sistema Electrónico y Mecánico)y Rover 2 (Sistema de
    Navegación y Autonomía). En la actualidad se desarrollan los siguientes
    proyectos: robótica aplicada, cansat telemetry, cansat rover, rover
    challenge, cohete experimental y globo estratosférico con fines de
    participación internacional y publicación científica.
  </React.Fragment>
);
