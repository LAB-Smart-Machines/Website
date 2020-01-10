import * as React from "react";
import Link from "next/link";
import "../static/styles/theme.css";
import { string } from "prop-types";

import logo from "../static/images/smart_machines_ctci_logo.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: props.width };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth + "px" });
  }

  render() {
    return (
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
              src={logo}
              alt="Logo"
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
        </div>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  height: string
};

Header.propTypes = {
  height: "500px"
};
