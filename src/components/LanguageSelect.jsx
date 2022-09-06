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
      <select
        className="select"
        name="language"
        selected="en"
        onChange={onChange}
      >
        <option value="en">{t("Footer.English")}</option>
        <option value="fr">{t("Footer.French")}</option>
        <option value="es">{t("Footer.Spanish")}</option>
      </select>
    </LanguageSelectStyle>
  );
}

const LanguageSelectStyle = styled.div`
  .select {
    background-color: var(--secondary-color);
    padding: 0.35em 1.5em;
    border: 1px solid var(--font-color);
    font-family: var(--main-font);
    font-size: 1.5rem;
    border-radius: 3px;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.4rem;
    }
  }
`;
