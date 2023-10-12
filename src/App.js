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

import ReactGA from "react-ga4";

export default function App() {
  ReactGA.initialize("G-L6MW5B86QV");

// Send pageview with a custom path
// ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

// Send a custom event
// ReactGA.event({
//   category: "your category",
//   action: "your action",
//   label: "your label", // optional
//   value: 99, // optional, must be a number
//   nonInteraction: true, // optional, true/false
//   transport: "xhr", // optional, beacon/xhr/image
// });

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
