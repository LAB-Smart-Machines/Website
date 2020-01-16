import * as React from "react";

const Footer = () => (
  <footer id="contact" class="section contact">
    <div class="w-container">
      <h2 class="heading-4">Preguntas?</h2>

      <div class="divider grey"></div>
      <div class="w-row">
        <div class="w-col w-col-4">
          <div class="icon-wrapper">
            <img
              src="../static/images/map-marker-alt-solid.svg"
              alt="icono mapa"
              width="44"
            ></img>
          </div>
          <h3 class="heading-5">direccion</h3>
          <p class="contact-text">
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

        <div class="w-col w-col-4">
          <div class="icon-wrapper _2">
            <img
              src="../static/images/envelope-regular.svg"
              alt="icono cartaa"
              width="70"
            ></img>
          </div>
          <h3 class="heading-5">email</h3>
          <p class="contact-text">
            <a
              href="mailto:contact@minimal.com?subject=Hi!"
              target="_blank"
              class="link"
            >
              smart.machines@uni.edu.pe
            </a>
          </p>
        </div>

        <div class="w-col w-col-4">
          <div class="icon-wrapper _2">
            <img
              src="../static/images/heart-regular.svg"
              alt="icono corazon"
              width="68"
            ></img>
          </div>

          <h3 class="heading-5">Sociales</h3>
          <Icono texto={"Github"} icono={"github-square"} />
          <Icono texto={"Facebook"} icono={"facebook-square"} />
          <Icono texto={"Twitter"} icono={"twitter-square"} />
          <Icono texto={"LinkedIn"} icono={"linkedin"} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

// stateless componente
const Icono = ({ texto, icono }) => (
  <a
    href="#"
    class="social-wrapper contact-text w-inline-block"
    target="_blank"
  >
    <img
      src={`../static/images/${icono}-brands.svg`}
      alt={`icono ${icono}`}
      class="social-icon"
      width="14"
    ></img>
    <div class="social-link-text">{texto}</div>
  </a>
);
