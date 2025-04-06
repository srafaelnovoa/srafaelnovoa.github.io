export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-md mb-6">
      <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
      <p className="text-sm text-gray-400 mb-2">
        🛠️ Tech: {project.tech.join(", ")}
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src={project.screenshot}
          alt={project.title + " screenshot"}
          className="rounded-md w-full md:w-1/2 border border-gray-700"
        />
        <p className="text-gray-300 text-sm md:w-1/2">{project.description}</p>
      </div>
      <div className="flex gap-4 text-sm">
        <a
          href={project.repo}
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        <a
          href={project.demo}
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
