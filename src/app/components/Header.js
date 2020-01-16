import * as React from "react";
import Link from "next/link";

// stateless componente
const Header = () => (
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration="400"
    className="navbar w-nav"
  >
    <div className="w-container">
      <a href="#" className="brand-block w-clearfix w-nav-brand">
        <img
          className="logo-img"
          src={"../static/images/smart_machines_ctic_logo.png"}
          alt="regresar al inicio"
          sizes="(max-width: 767px) 50px, 136px"
          width="136"
        ></img>
      </a>
      {/* {this.state.width} */}
      <header role="navigation" className="nav-menu w-nav-menu">
        <Link
          href="/"
          className="nav-link w-nav-link"
          style="max-width: 940px;"
        >
          <a className="nav-link w-nav-link">INICIO</a>
        </Link>{" "}
        <Link
          href="#projects"
          className="nav-link w-nav-link"
          style="max-width: 940px;"
        >
          <a className="nav-link w-nav-link">PROYECTOS</a>
        </Link>{" "}
        <Link
          href="/about"
          className="nav-link w-nav-link"
          style="max-width: 940px;"
        >
          <a className="nav-link w-nav-link">MIEMBROS</a>
        </Link>{" "}
        <Link
          href="/about"
          className="nav-link w-nav-link"
          style="max-width: 940px;"
        >
          <a className="nav-link w-nav-link">PUBLICACIONES</a>
        </Link>{" "}
        <Link
          href="#contact"
          className="nav-link w-nav-link"
          style="max-width: 940px;"
        >
          <a className="nav-link w-nav-link">CONTACTO</a>
        </Link>
      </header>
      <div class="menu-button w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
);

export default Header;
