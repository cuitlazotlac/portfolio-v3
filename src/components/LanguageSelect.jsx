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
        <option value="en">{t("Footer.English")}</option>
        <option value="fr">{t("Footer.French")}</option>
        <option value="es">{t("Footer.Spanish")}</option>
      </select>
    </LanguageSelectStyle>
  );
}

const LanguageSelectStyle = styled.div`
  .select {
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--secondary-color)"};
    padding: 0.35em 1.5em;
    border: 1px solid var(--font-color);
    font-size: 1.6rem;
    border-radius: 1px;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.4rem;
    }
  }
`;
