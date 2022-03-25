import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MdWbSunny } from "react-icons/md";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark-theme");
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
          <MdWbSunny />
        </label>
      </div>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  margin-top: 1em;
  .checkbox {
    display: none;
  }
  .label {
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 5px;
    height: 35px;
    width: 53px;
    transform: scale(1);
  }
`;
