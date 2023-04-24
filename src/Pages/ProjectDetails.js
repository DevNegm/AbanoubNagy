import { createClient } from "contentful";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function ProjectDetails() {
  const params = useParams();
  console.log(params.slug);
  const [project, setProject] = useState([]);
  const client = createClient({
    space: "htis83wsk3n4",
    accessToken: "rRk2Jf50M95TzLqVTp7TtcxkBYvUICSBWVmOLAEy9Cc",
    host: "preview.contentful.com",
  });
  useEffect(() => {
    const getProject = async () => {
      try {
        await client
          .getEntries({
            content_type: "projects",
            "fields.slug": params.slug,
          })
          .then((res) => {
            const sanitizedEntries = res.items.map((item) => {
              const image = item.fields.image.fields;
              return {
                ...item.fields,
                image,
              };
            });
            console.log(sanitizedEntries);
            setProject(sanitizedEntries[0]);
          });
      } catch (error) {
        console.log("error", error);
      }
    };
    getProject();
  }, []);
  return (
    <main>
      <div className="work-details">
        <Link className="arrow" to="/projects">
          <BsArrowLeft /> Go Back
        </Link>
        <img src={project?.image?.file?.url} alt={project.name} />
        <h1 className="work-title">{project.name}</h1>
        <p className="work-body">{project.body}</p>
      </div>
    </main>
  );
}

export default ProjectDetails;
