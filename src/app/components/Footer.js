import * as React from "react";

const Footer = () => (
  <footer id="contact" className="section contact">
    <div className="w-container">
      <h2 className="heading-4">Preguntas?</h2>

      <div className="divider grey"></div>
      <div className="w-row">
        <div className="w-col w-col-4">
          <div className="icon-wrapper">
            <img
              src="../static/images/map-marker-alt-solid.svg"
              alt="icono mapa"
              width="44"
            ></img>
          </div>
          <h3 className="heading-5">direccion</h3>
          <p className="contact-text">
            <a
              href="https://www.google.com/maps/place/Centro%20de%20Tecnologias%20de%20Informacion%20y%20Comunicaciones/data=!4m2!3m1!1s0x9105cf18d643a701:0x428e90276ca96a02?gl=PE"
              target="_blank"
            >
              Av. Túpac Amaru, Puerta Nº 5 Pabellón R4, Lima Perú
            </a>
          </p>
          <a href="https://www.ctic.uni.edu.pe/" target="_blank">
            <img
              src="../static/images/ctic_oficial.png"
              alt=""
              width="197"
              alt="logo ctic"
            ></img>
          </a>
        </div>

        <div className="w-col w-col-4">
          <div className="icon-wrapper _2">
            <img
              src="../static/images/envelope-regular.svg"
              alt="icono cartaa"
              width="70"
            ></img>
          </div>
          <h3 className="heading-5">email</h3>
          <p className="contact-text">
            <a
              href="mailto:contact@minimal.com?subject=Hi!"
              target="_blank"
              className="link"
            >
              smart.machines@uni.edu.pe
            </a>
          </p>
        </div>

        <div className="w-col w-col-4">
          <div className="icon-wrapper _2">
            <img
              src="../static/images/heart-regular.svg"
              alt="icono corazon"
              width="68"
            ></img>
          </div>

          <h3 className="heading-5">Sociales</h3>
          <Icono
            texto={"Github"}
            icono={"github-square"}
            url={"https://github.com/LAB-Smart-Machines"}
          />
          <Icono
            texto={"Facebook"}
            icono={"facebook-square"}
            url={"https://www.facebook.com/labsmartmachines/"}
          />
          <Icono
            texto={"Twitter"}
            icono={"twitter-square"}
            url={"https://twitter.com/CticUni"}
          />
          <Icono
            texto={"LinkedIn"}
            icono={"linkedin"}
            url={
              "https://www.linkedin.com/company/laboratorio-smart-machines-ctic-uni/"
            }
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

// stateless componente
const Icono = ({ texto, icono, url }) => (
  <a
    href={url}
    className="social-wrapper contact-text w-inline-block"
    target="_blank"
  >
    <img
      src={`../static/images/${icono}-brands.svg`}
      alt={`icono ${icono}`}
      className="social-icon"
      width="14"
    ></img>
    <div className="social-link-text">{texto}</div>
  </a>
);
