import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: '🛠️ StudyPal Automation Framework',
      description:
        'Built an automation testing framework using Selenium and TestNG for Delve Health’s StudyPal. Integrated with Jenkins for CI/CD.',
      technologies: ['Selenium', 'TestNG', 'JMeter', 'Jenkins',"Appium"],
      link: '#',
    },
    {
      title: '🛍️ DanaUniform E-Commerce Testing',
      description:
        'Performed end-to-end testing on DanaUniform’s online store, ensuring flawless checkout, cart functionality, and UI performance.',
      technologies: ['Selenium', 'Postman', 'Manual Testing'],
      link: '#',
    },
    {
      title: '🚀 CI/CD Pipeline Automation',
      description:
        'Developed a Jenkins-based CI/CD pipeline for automated testing and deployment across multiple environments.',
      technologies: ['Jenkins', 'GCP'],
      link: '#',
    },
    {
      title: '🌐 Front-End Portfolio',
      description:
        'Built a responsive, animated portfolio website using React, Tailwind CSS, and Framer Motion.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      link: '#',
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-6 py-12 pt-20"
    >
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 relative inline-block after:block after:absolute after:w-full after:h-1 after:bg-purple-600 after:bottom-0 after:left-0 after:rounded-md">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore some of the projects I've worked on.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border border-gray-300 shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 relative group"
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
             
            </a>

            {/* Hover Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition duration-500 rounded-xl"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;