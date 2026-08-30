import { BrowserRouter, Route, Routes } from "react-router";
import {
  ContactPage,
  HomePage,
  ProfilePage,
  SiteFrame,
} from "./PortfolioSite";
import "./portfolio.css";

export default function App() {
  return (
    <BrowserRouter>
      <SiteFrame>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SiteFrame>
    </BrowserRouter>
  );
}
