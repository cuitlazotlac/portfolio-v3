import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ContactPage,
  HomePage,
  ProfilePage,
  SiteFrame,
  WorkPage,
} from "./PortfolioSite";
import "./portfolio.css";

export default function App() {
  return (
    <Router>
      <SiteFrame>
        <Switch>
          <Route path="/work" component={WorkPage} />
          <Route path="/about" component={ProfilePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </SiteFrame>
    </Router>
  );
}
