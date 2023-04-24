import React, { useEffect, useState } from "react";
import useContentful from "../Hooks/useContenful";
import { Link } from "react-router-dom";
function RecentProjects() {
  const [projects, setProjects] = useState([]);
  const { getProjects } = useContentful();
  useEffect(() => {
    getProjects().then((res) => setProjects(res));
  }, []);
  return (
    <section class="recent-work" id="work">
      <div class="recent-work-content">
        <h1 class="recent-main">Some Of My Recent Projects</h1>
        {projects?.slice(0, 3)?.map((project, index) => (
          <div key={index} class="recent-card">
            <img
              class="recent-card-img"
              src={project?.image?.file?.url}
              alt="recent"
            />
            <div class="recent-card-body">
              <h1 class="recent-card-title">{project?.name}</h1>
              <p class="recent-card-text">{project?.body.slice(0, 100)}...</p>

              <Link to={`/projects/${project.slug}`}>Read More..</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;
