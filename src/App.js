import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/Page404";
import Projects from "./Pages/Projects";
import ProjectsDetails from "./Pages/ProjectDetails";
import "./Styles/style.scss";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div data-theme={theme}>
      {loading ? (
        <div className="bgLoader">
          <PropagateLoader
            color={"var(--mainColor)"}
            loading={loading}
            size={30}
          />
        </div>
      ) : (
        <div>
          <Navbar switchTheme={switchTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectsDetails />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <ScrollToTop/>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
