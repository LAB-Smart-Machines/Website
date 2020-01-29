import React, { Component } from "react";
import Link from "next/link";

import sortDown from "../images/sort-down-solid.svg";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    return (
      <div className="nav-link w-nav-link">
        <Link href="/#projects">
          <a className="button-menu">PROYECTOS</a>
        </Link>

        <img
          className="menu-img"
          src={sortDown}
          alt="menu"
          sizes="(max-width: 71px) 50px, 71px"
          width="16"
          onClick={this.showMenu}
        ></img>
        {this.state.showMenu ? (
          <ul>
            <PostLink titulo={"Cansat Rover"} />
            <PostLink titulo={"GLOBO ESTRATOSFÉRICO"} />
            <PostLink titulo={"Cansat Telemtery"} />
            <PostLink titulo={"Warbot"} />
            <PostLink titulo={"Bioreactor"} />
            <PostLink titulo={"Cohetes"} />
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Menu;

// https://nextjs.org/learn/basics/create-dynamic-pages/passing-data
const PostLink = props => (
  <li>
    <a href={`/proyecto?titulo=${props.titulo.toUpperCase()}`}>
      {props.titulo}
    </a>
  </li>
);
