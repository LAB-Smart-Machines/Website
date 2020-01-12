import * as React from "react";
import "../static/styles/theme.css";

const Footer = ({ pathname }) => (
  <div id="contact" class="section contact">
    <div class="w-container">
      <h2 class="heading-4">Preguntas?</h2>

      <div class="divider grey"></div>
      <div class="w-row">
        <div class="w-col w-col-4">
          <div class="icon-wrapper">
            <img
              src="../static/images/map-marker-alt-solid.svg"
              alt=""
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
          <img src="../static/images/ctci_oficial.png" alt="" width="197"></img>
        </div>

        <div class="w-col w-col-4">
          <div class="icon-wrapper _2">
            <img
              src="../static/images/envelope-regular.svg"
              alt=""
              width="70"
            ></img>
          </div>
          <h3 class="heading-6">email</h3>
          <p class="contact-text">
            <a
              href="mailto:contact@minimal.com?subject=Hi!"
              target="_blank"
              class="link"
            >
              smart.machines@uni.edu.pe
            </a>
            <a href="#" class="link"></a>
          </p>
        </div>

        <div class="w-col w-col-4">
          <div class="icon-wrapper _2">
            <img
              src="../static/images/heart-regular.svg"
              alt=""
              width="68"
            ></img>
          </div>

          <h3 class="heading-7">Sociales</h3>
          <a
            href="#"
            class="social-wrapper contact-text w-inline-block w-clearfix"
          >
            <img
              src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dc7915d6ade63cbfaf83008_facebook-icon_black.svg"
              alt=""
              class="social-icon"
              width="14"
            ></img>
            <div class="social-link-text">Facebook</div>
          </a>
          <a href="#" class="social-wrapper contact-text w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dc7915d6ade633c76f8300e_twitter-icon_black.svg"
              alt=""
              class="social-icon"
              width="14"
            ></img>
            <div class="social-link-text">Twitter</div>
          </a>
          <a href="#" class="social-wrapper contact-text w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/5dc7915d6ade6389d9f82fe8/5dc7915d6ade63e4c9f8300c_linkdin-icon-black.svg"
              alt=""
              class="social-icon"
              width="14"
            ></img>
            <div class="social-link-text">Linkedin</div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
