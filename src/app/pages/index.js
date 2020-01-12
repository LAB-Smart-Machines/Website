import * as React from "react";
import App from "../components/App";
import Columna from "../components/Columna";
import Seccion from "../components/Seccion";

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
      subTexto={historia_texto}
      botonHref={"#contact"}
      botonTexto={"Contacto"}
    />

    <div id="projects" className="section grey">
      <div className="w-container">
        <h2 className="heading-3">Proyectos</h2>
        <div className="divider grey"></div>
        {/* primera fila */}
        <div className="w-row">
          <Columna
            titulo={"Cansat Rover"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_cansat_rover.jpeg"}
          />
          <Columna
            titulo={"GLOBO ESTRATOSFÉRICO"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_GLOBO_ESTRATOSFÉRICO.jpeg"}
          />
          <Columna
            titulo={"cansat telemetry"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_cansat_telemetry.jpeg"}
          />
        </div>
        {/* segunda fila */}
        <div className="w-row">
          <Columna
            titulo={"WARBOT"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_warbot.jpeg"}
          />
          <Columna
            titulo={"bioreactor"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_GLOBO_ESTRATOSFÉRICO.jpeg"}
          />
          <Columna
            titulo={"ccohetes"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_cohetes.jpeg"}
          />
        </div>
        {/* tercera fila */}
        <div className="w-row">
          <Columna
            titulo={"WARBOT"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_warbot.jpeg"}
          />
          <Columna
            titulo={"bioreactor"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_GLOBO_ESTRATOSFÉRICO.jpeg"}
          />
          <Columna
            titulo={"ccohetes"}
            subtitulo={"subtitulo"}
            img={"../static/images/ctci_cohetes.jpeg"}
          />
        </div>
      </div>
    </div>
  </App>
);

const historia_texto = `El 22 de setiembre del 2011 un grupo de 10 estudiantes de la Universidad Nacional de Ingeniería se juntan con el
propósito de realizar proyectos multidisciplinarios. Para el logro de
ello deciden formar el capítulo de
AESS (AEROSPACIAL AND ELECTRONIC SYSTEM SOCIETY),
perteneciente a la sociedad IEEE. Es así como en el
evento de UNI-empresa, este grupo se contacta con Fredy Calle y Renato
Miyagusuku, investigadores que pertenecían al proyecto satelital
Chasqui I, quienes aceptan brindar
asesorías y capacitaciones, dentro del área Aeroespacial. En enero del
2012, Fredy les presenta la idea de incursionar al mundo tecnológico a
través de la metodología CANSAT. Tomado la experiencia que
compartieron en Japón. Es de esta forma que se da inicio a los
primeros proyectos: el perfilador de vientos, Rover 1 (Sistema
Electrónico y Mecánico) y Rover 2 (Sistema de Navegación y Autonomía).
En la actualidad se desarrollan los siguientes proyectos: robótica
aplicada, cansat telemetry, cansat rover, rover challenge, cohete
experimental y globo estratosférico con fines de participación
internacional y publicación científica.`;

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
