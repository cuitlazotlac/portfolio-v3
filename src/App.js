import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/shared/Footer";
import NavMenu from "./components/shared/NavMenu";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Portfolios from "./pages/Portfolios";

import ReactGA from "react-ga";

export default function App() {
  ReactGA.initialize("UA-208876305-1");
  //to report page view
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/portfolio">
            <Portfolios />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
