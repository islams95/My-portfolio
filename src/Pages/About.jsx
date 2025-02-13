import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-6 py-12 pt-20"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block after:block after:absolute after:w-full after:h-1 after:bg-indigo-600 after:bottom-0 after:left-0 after:rounded-md">
          About Me
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Discover my journey, skills, and passion for software testing and front-end development.
        </p>
      </div>

      {/* About Description */}
      <div className="mb-10">
        <p className="text-base md:text-xl text-gray-800 mb-6 leading-relaxed">
          I'm a results-driven <span className="text-indigo-600 font-semibold">Software Testing Engineer</span> with 3+ years of experience in testing web and mobile applications.  
          I also have strong skills in <span className="text-green-600 font-semibold">Front-End Development</span>, particularly in **React**, **JavaScript**, and **Tailwind CSS**.
        </p>
      </div>

      {/* Experience & Education Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Experience */}
        <div className="bg-white bg-opacity-90 backdrop-blur-lg border border-gray-300 shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">
            👨‍💻 Professional Experience
          </h3>
          <ul className="list-none space-y-4 text-sm md:text-base">
            <li className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 hover:scale-[1.02] transition-transform duration-300">
              <strong className="text-lg text-gray-800">💼 Automation Test Engineer</strong>
              <p className="text-sm text-gray-500">Delve Health (Remote) | May 2023 – Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Developed automation framework for StudyPal.</li>
                <li>Integrated tests with Jenkins CI/CD pipelines.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Education & Certifications */}
        <div className="bg-white bg-opacity-90 backdrop-blur-lg border border-gray-300 shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">
            🎓 Education & Certifications
          </h3>
          <ul className="list-none space-y-4 text-sm md:text-base">
            <li className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 hover:scale-[1.02] transition-transform duration-300">
              <strong className="text-lg text-gray-800">🎓 Bachelor of Pharmacy</strong>
              <p className="text-sm text-gray-500">Moscow State Medical University, Russia | 2022</p>
            </li>
            <li className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 hover:scale-[1.02] transition-transform duration-300">
              <strong className="text-lg text-gray-800">📜 ISTQB Certified</strong>
              <p className="text-sm text-gray-500">Cert. No: 240110007</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">⚙️ Technical Skills</h3>

        {/* Responsive Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testing Skills */}
          <div className="p-6 bg-indigo-100 border-l-4 border-indigo-500 rounded-lg shadow-sm">
            <h4 className="text-lg md:text-xl font-semibold text-indigo-700 mb-4">🧪 Software Testing</h4>
            <div className="flex flex-wrap gap-2">
              {['Selenium', 'TestNG', 'JMeter', 'Rest Assured', 'Jenkins'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 text-sm md:text-base font-medium bg-indigo-200 text-indigo-800 rounded-lg hover:bg-indigo-300 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Front-End Skills */}
          <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg shadow-sm">
            <h4 className="text-lg md:text-xl font-semibold text-green-700 mb-4">🌐 Front-End Development</h4>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React.js', 'Tailwind CSS', 'Vite'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 text-sm md:text-base font-medium bg-green-200 text-green-800 rounded-lg hover:bg-green-300 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default About;