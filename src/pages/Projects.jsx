import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import SectionTitle from "../components/SectionTitle";
import ProjectItem from "../components/ProjectItem";

import ProjectsInfo from "../assets/data/portfolios";

import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const [searchText, setSearchText] = useState("");
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  useEffect(() => {
    if (searchText === "") return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading={t("Project.Placeholder")}
            subheading={t("Project.Placeholder")}
          />
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder={t("Project.Placeholder")}
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.title}
                desc={item.desc}
                stacks={item.stack}
                img={item.image}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    border-radius: 1px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;
