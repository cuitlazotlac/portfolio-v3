import React from "react";
import styled from "styled-components";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { t } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LanguageSelectStyle>
      <select className="select" name="language" onChange={onChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </LanguageSelectStyle>
  );
}

const LanguageSelectStyle = styled.div`
  margin-top: 1rem;
  .select {
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--secondary-color)"};
    padding: 0.35em 1.5em;
    border: 1px solid var(--font-color);
    padding: 0.5em 1.5em;
    text-align: center;
    border-radius: 1px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;
