import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import SectionTitle from "../components/shared/SectionTitle";
import ProjectItem from "../components/ProjectItem";
import Filter from "../components/Filter";

import ProjectsInfo from "../assets/data/blockchain";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion/dist/framer-motion";

const allButtons = [
  "All",
  ...new Set(ProjectsInfo.map((item) => item.category)),
];

export default function Projects() {
  const { t } = useTranslation();

  const [searchText, setSearchText] = useState("");
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  const [button] = useState(allButtons);

  useEffect(() => {
    if (searchText === "") return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.title.toLowerCase().match(searchText.toLowerCase())
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

  const filter = (button) => {
    if (button === "All") {
      setProjectsData(ProjectsInfo);
      return;
    }

    const filteredData = ProjectsInfo.filter(
      (item) => item.category === button
    );
    setProjectsData(filteredData);
  };

  return (
    <>
      <ProjectStyle>
        <div className="container">
          <motion.div
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.77, ease: "easeOut" }}
            exit={{ opacity: 1 }}
          >
            <SectionTitle
              heading={t("Project.SectionTitle")}
              subheading={t("Project.SectionDescription")}
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
            <br />
            <Filter filter={filter} button={button} />
          </motion.div>

          <br />
          <br />
          <motion.div
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.79, ease: "easeOut" }}
            exit={{ opacity: 1 }}
          >
            <div className="projects__allItems">
              {projectsData.map((item) => (
                <ProjectItem
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                  stacks={item.stack}
                  link1={item.link1}
                  link2={item.link2}
                  image={item.image}
                  animation={item.animatation}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </ProjectStyle>
    </>
  );
}

const ProjectStyle = styled.div`
  padding: 10rem 0;
  width: 100%;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 920px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 670px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .projects__searchBar {
    position: relative;
    width: 500px;
    border: 1px solid var(--font-color);
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    color: #22272e;
    font-size: 2rem;
    font-family: var(--main-font);
    font-size: 1.5rem;
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
    color: var(--font-color);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;
