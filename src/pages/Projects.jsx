import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      ) : (
        <p className="text-gray-400">Loading projects...</p>
      )}

      <Link to="/changelog" className="text-blue-400 hover:underline">
        View my changelog
      </Link>
    </div>
  );
}
