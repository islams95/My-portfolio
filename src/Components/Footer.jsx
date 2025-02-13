import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-6 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Left Side: Logo & Description */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Islam Salah 🚀</h2>
          <p className="text-sm">Software Testing Engineer & Front-End Developer</p>
        </div>

        {/* Center: Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/islam-salah95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-all"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/islams95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-all"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:islams2024@gmail.com"
            className="hover:text-yellow-300 transition-all"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-sm">© {currentYear} Islam Salah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;