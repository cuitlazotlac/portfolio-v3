import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

import { useTranslation } from "react-i18next";

// import logo from "../../assets/images/favicon.svg";

export default function NavMenu() {
  const { t } = useTranslation();

  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t("Navigation.Home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t("Navigation.About")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t("Navigation.Projects")}
          </NavLink>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/12Qh0Q2oEcfTmzaI3tDXXfJzmjzvoGc-0/view?usp=sharing" target="_blank" rel="noreferrer">
            {t("Navigation.Resume")}
          </a>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t("Navigation.Contact")}
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: var(--background-color);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 2px;
      transition: 0.3s ease background-color;
      &:hover {
        padding-top: -10rem;
        transform: scale(1.1);
        transform: translateY(-3px);
        transform-style: preserve-3d;
        transition: all 0.2s ease-in-out;
      }
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      font-size: 1.6rem;
      font-weight: 500;
      color: #605e5a;
      outline: none;
      &:hover {
        color: var(--font-color);
      }
    }
    .active {
      color: var(--font-color);
      /* &:hover {
        color: var(--font-color);
      } */
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--secondary-color);
      opacity: 0.9;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
      .logo {
        width: 20%;
      }
    }
  }
`;
