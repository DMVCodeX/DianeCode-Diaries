import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./AboutMe";
import { Home } from "./Home";

export function Content() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
