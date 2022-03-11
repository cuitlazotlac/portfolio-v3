import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light-theme");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <NavigationStyled>
      <div className="light-dark-toggle">
        <input
          type="checkbox"
          id="chk"
          className="checkbox"
          // onChange={() => setDarkMode(!darkMode)}
          onChange={themeToggler}
          // onClick={themeToggler}
        />
        <label htmlFor="chk" className="label">
          <span className="fa-moon">info</span>{" "}
          <span className="fa-sun">favorite_border</span>{" "}
          <div className="ball"></div>
        </label>
      </div>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--sidebar-dark-border);
  .profile {
    width: 100%;
    height: 15%;
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 50% 25% 25%;
    .avatar {
      width: 95%;
      height: 75%;
      margin-left: 0.2rem;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    .light-dark-toggle {
      width: 90%;
      height: 100%;
      grid-column-start: 2;
      grid-column-end: 3;
      margin-top: 1.1rem;
      margin-left: 1rem;
      .checkbox {
        opacity: 0;
        position: absolute;
      }
      .checkbox:checked + .label .ball {
        transform: translateX(24px);
      }
      .label {
        background-color: var(--second-light-color);
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 5px;
        // height: 26px;
        width: 53px;
        transform: scale(1);
      }
      .ball {
        height: 25px;
        width: 25px;
        top: 2px;
        left: 2px;
        border-radius: 50px;
        background-color: #fff;
        position: absolute;
        transition: transform 0.2s linear;
      }
      .fa-moon {
        color: #f1c40f;
      }
      .fa-sun {
        color: #f39c12;
      }
    }

    .lang-list {
      grid-column-start: 3;
      grid-column-end: 4;
      margin-top: 0.9rem;
      margin-left: 1.1rem;
      .dropdown-toggle::after {
        display: none;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: none;
      }
      .btn {
        background-color: var(--second-light-color);
        color: #fff;
      }
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      a {
        font-weight: 200;
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-size: 1.3rem;
        letter-spacing: 0.5px;
        text-decoration: inherit; /* no underline */
        &:hover {
          cursor: pointer;
          color: var(--border-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--border-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
  .footer-div {
    width: 100%;
    // height: 13%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .social-btn {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      img {
        height: 80%;
        width: 25%;
        &:hover {
          transform: scale(1.1);
          transform: translate(2px, -2px);
          transform-style: preserve-3d;
          transition: all 0.2s ease-in-out;
          // box-shadow: 2px 2px var(--second-light-color);
        }
      }
    }
    .copyright {
      font-weight: 100;
      font-size: 1.1rem;
      margin-top: 0.2rem;
      margin-left: 0.4rem;
      text-align: left;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
      img {
        height: 20%;
        width: 20%;
      }
    }
    @media screen and (max-width: 496px) {
      margin-bottom: 15%;
    }
    @media screen and (max-width: 370px) {
      margin-bottom: 15%;
    }
  }
`;
