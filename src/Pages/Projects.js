import React, { useEffect, useState } from "react";
import useContentful from "../Hooks/useContenful";
import { Link } from "react-router-dom";
function Projects() {
  const [projects, setProjects] = useState([]);
  const { getProjects } = useContentful();
  useEffect(() => {
    getProjects().then((res) => setProjects(res));
  }, []);

  return (
    <main>
      <section className="work">
        <div className="work-content">
          <h1 className="work-main">My Projects</h1>
          <div className="work-cards">
            {projects?.map((project, index) => (
              <div className="card">
                <img
                  className="card-img"
                  src={project?.image?.file?.url}
                  alt="recent work"
                />
                <div className="card-body">
                  <h1 className="card-title">{project?.name?.slice(0, 20)}</h1>
                  <p className="card-text">{project?.body?.slice(0, 40)}...</p>
                  <Link to={`/projects/${project?.slug}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
