import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./AboutMe";
import { Home } from "./Home";
import { Blog } from "./Blog";
import { Projects } from "./Projects";

export function Content() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
