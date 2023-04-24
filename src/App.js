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
import { useEffect } from "react";

function App() {
  const [theme,setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

const switchTheme =() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
}
useEffect(() => {
  document.body.setAttribute("data-theme", theme);
}, [theme]);
  return (
    <div data-theme={theme}>
      <Navbar switchTheme={switchTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectsDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
