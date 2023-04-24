import React from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import RecentProjects from "../Components/RecentProjects";

function Home() {
  return (
    <main>
      <Header />
      <About />
      <RecentProjects />
    </main>
  );
}

export default Home;
