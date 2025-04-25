const Projects = () => {
  const projectsData = [
    {
      title: "E-Commerce System",
      techStack: "Laravel, PHP, MySQL, JavaScript",
      githubLink: "https://github.com/SarifulSarker/myproject",
    },
    {
      title: "Book Management System",
      techStack: "Java, Spring Boot, MySQL",
      githubLink: "https://github.com/SarifulSarker/Book-Management",
    },
    {
      title: "Counter App",
      techStack: "Html, Tailwind CSS, JavaScript",
      githubLink: "https://github.com/SarifulSarker/Counter-app",
    },
    {
      title: "Demo Project 2: To-do List Application",
      techStack: "HTML, CSS, JavaScript, Node.js",
      description: "A tool for task management, allowing users to add, edit, and delete tasks.",
    },
  ];

  return (
    <section id="projects" className="p-8 max-w-4xl mx-auto">
      <h2 className="text-5xl font-serif-blod mb-6 text-center text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-black transition duration-600"
          >
            <h3 className="text-xl font-semibold  mb-2 text-gray-700">{project.title}</h3>
            {project.techStack && <p className="text-gray-600 mb-3">{project.techStack}</p>}
            {project.description && <p className="text-gray-600 mb-3">{project.description}</p>}
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;