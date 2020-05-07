import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import logo from "../images/smart_machines_ctic_logo.png";
import DDMenu from "../components/DropdownMenu";

// stateless componente
const Header = ({ pathname }) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <React.Fragment>
      <div className="menu-mobile" ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        className="navbar w-nav"
      >
        <div className="w-container">
          <a href="/" className="brand-block w-clearfix w-nav-brand">
            <img
              className="logo-img"
              src={logo}
              alt="regresar al inicio"
              sizes="(max-width: 767px) 50px, 136px"
              width="136"
            ></img>
          </a>
          {/* https://nextjs.org/docs/api-reference/next/link */}
          <header role="navigation" className="nav-menu w-nav-menu">
            <Link href="/">
              <a className="nav-link w-nav-link">INICIO</a>
            </Link>
            <DDMenu />
            <Link href="/miembros">
              <a className="nav-link w-nav-link">MIEMBROS</a>
            </Link>
            <Link href="/publicaciones">
              <a className="nav-link w-nav-link">PUBLICACIONES</a>
            </Link>
            <Link href="#contact">
              <a className="nav-link w-nav-link">CONTACTO</a>
            </Link>
          </header>
        </div>
      </div>
    </React.Fragment>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f37777;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/">
        <a className="nav-link w-nav-link">INICIO</a>
      </Link>
      <Link href="/#projects">
        <a className="nav-link w-nav-link">PROYECTOS</a>
      </Link>
      <Link href="/miembros">
        <a className="nav-link w-nav-link">MIEMBROS</a>
      </Link>
      <Link href="/publicaciones">
        <a className="nav-link w-nav-link">PUBLICACIONES</a>
      </Link>
      <Link href="#contact">
        <a className="nav-link w-nav-link">CONTACTO</a>
      </Link>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#f37777")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Header;
