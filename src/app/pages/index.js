import * as React from "react";
import App from "../components/App";

export default () => (
  <App>
    <div className="header">
      <div className="w-container">
        <h1 className="main-heading">Laboratorio Smart Machines</h1>
        <div className="divider"></div>
        <div className="main-subtitle">
          Smart Machines es un laboratorio de investigación de excelencia, con
          liderazgo nacional y reconocimiento internacional creciente en el
          campo aeroespacial y robótica aplicada, ocupando un lugar central en
          el desarrollo de la ciencia y tecnología de nuestro país.
        </div>
      </div>
    </div>
    <div id="process" className="section">
      <div className="w-container">
        <h2 className="heading">Mision</h2>
        <div className="divider grey"></div>
        <div className="text-block">
          El laboratorio de investigación Smart machines es un centro cuyo
          propósito es desarrollar investigación básica y aplicada en el campo
          aeroespacial y robótica aplicada, que contribuya a los esfuerzos de la
          comunidad científica para impulsar las fronteras del conocimiento y su
          aplicación en el sector productivo y social del país, además de la
          formación de recursos humanos de alto nivel, el desarrollo y
          transferencia de tecnología, y la contribución de uno cultura
          científica y tecnológica en la sociedad peruana.
        </div>
      </div>
    </div>
    <div className="about-section">
      <div className="w-container">
        <h2 className="heading-2">Historia</h2>
        <div className="divider grey"></div>
        <p className="about-text">
          El 22 de setiembre del 2011 un grupo de 10 estudiantes de la
          <strong> Universidad Nacional de Ingeniería</strong> se juntan con el
          propósito de realizar proyectos multidisciplinarios. Para el logro de
          ello deciden formar el capítulo de{" "}
          <strong>AESS (AEROSPACIAL AND ELECTRONIC SYSTEM SOCIETY)</strong>,
          perteneciente a la sociedad <strong>IEEE</strong>. Es así como en el
          evento de UNI-empresa, este grupo se contacta con Fredy Calle y Renato
          Miyagusuku, investigadores que pertenecían al proyecto satelital{" "}
          <span className="text-span">Chasqui I</span>, quienes aceptan brindar
          asesorías y capacitaciones, dentro del área Aeroespacial. En enero del
          2012, Fredy les presenta la idea de incursionar al mundo tecnológico a
          través de la metodología CANSAT. Tomado la experiencia que
          compartieron en Japón. Es de esta forma que se da inicio a los
          primeros proyectos: el perfilador de vientos, Rover 1 (Sistema
          Electrónico y Mecánico) y Rover 2 (Sistema de Navegación y Autonomía).
          En la actualidad se desarrollan los siguientes proyectos: robótica
          aplicada, cansat telemetry, cansat rover, rover challenge, cohete
          experimental y globo estratosférico con fines de participación
          internacional y publicación científica.
        </p>
        <a href="#contact" className="button">
          Contacto
        </a>
      </div>
    </div>

    <div id="projects" className="section grey">
      <div className="w-container">
        <h2 className="heading-3">Proyectos</h2>
        <div className="divider grey"></div>

        <div className="w-row">
          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe2cd7d37fc7616fbf0_WhatsApp%20Image%202019-11-22%20at%207.14.44%20AM.jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">Cansat rover</h3>
                </div>
              </a>
            </div>
          </div>

          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe3967a3b5f562895aa_WhatsApp%20Image%202019-11-22%20at%207.14.43%20AM%20(1).jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">GLOBO ESTRATOSFÉRICO</h3>
                  <div>
                    descripcion askdhaksjdhasdhasd asdasdkjasdjskdksajdsakdjas
                    ksajdk ajskd dskas dkasdjas k ask dksa. dhaskjhdksajhd
                    sdkasld. sakjdlksajdasd . qwqwe weqwe qwekjwqkejq.
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe256a2d624644e486f_WhatsApp%20Image%202019-11-22%20at%207.14.44%20AM%20(1).jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">cansat telemetry</h3>
                  <div>Website</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-row">
          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe3cd7d37734716fc0d_WhatsApp%20Image%202019-11-22%20at%207.14.43%20AM%20(3).jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">WARBOT</h3>
                  <div>Photography</div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe3cd7d37734716fc0d_WhatsApp%20Image%202019-11-22%20at%207.14.43%20AM%20(3).jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">bioreactor</h3>
                  <div>Photography</div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe2d31f0fd6a45b9c2e_WhatsApp%20Image%202019-11-22%20at%207.14.43%20AM.jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">cohetes</h3>
                  <div>Website</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-row">
          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe3cd7d37734716fc0d_WhatsApp%20Image%202019-11-22%20at%207.14.43%20AM%20(3).jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">WARBOT</h3>
                  <div>Photography</div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe3cd7d37734716fc0d_WhatsApp%20Image%202019-11-22%20at%207.14.43%20AM%20(3).jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">bioreactor</h3>
                  <div>Photography</div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-col w-col-4 w-col-small-4">
            <div className="project-wrapper">
              <a
                href="/project-page"
                className="project-wrapper w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dd8dbe2d31f0fd6a45b9c2e_WhatsApp%20Image%202019-11-22%20at%207.14.43%20AM.jpeg"
                  sizes="(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.3333282470703px, 300px"
                  alt=""
                ></img>
                <div className="project-info">
                  <h3 className="project-title">cohetes</h3>
                  <div>Website</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </App>
);
