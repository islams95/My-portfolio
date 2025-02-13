import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg'; // Make sure this file exists

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 flex flex-col items-center justify-center text-white pt-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        {/* Profile Image
        <div className="mb-6">
          <img
            src={profilePic}
            alt="Islam Salah"
            className="w-40 h-40 mx-auto rounded-full border-4 border-yellow-400 shadow-lg hover:scale-105 transition-all"
          />
        </div> */}

        {/* Text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl">
          Hi, I'm <span className="text-yellow-400">Islam Salah</span> 👋
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          I'm a <span className="font-semibold text-blue-300">Software Testing Engineer</span> with 3+ years of experience.  
          I also have skills in <span className="text-green-300 font-semibold">Front-End Development</span> with <span className=' font-bold'>React</span> and<span className=' font-bold'> Tailwind CSS</span>.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all"
        >
          Contact Me 🚀
        </Link>
      </motion.div>

      {/* Floating Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 mt-6 px-4">
        {[
          { title: '🧪 Testing Expertise', desc: 'Manual, automation, and performance testing.', color: 'from-blue-600 to-blue-400' },
          { title: '🚀 Automation Tools', desc: 'Selenium, TestNG, JMeter, Jenkins.', color: 'from-purple-600 to-purple-400' },
          { title: '🔧 CI/CD Integration', desc: 'Jenkins, GitHub Actions, DevOps pipelines.', color: 'from-pink-600 to-pink-400' },
          { title: '🌐 Front-End Knowledge', desc: 'React, Tailwind, JavaScript, Vite.', color: 'from-green-600 to-green-400' }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`w-64 p-6 text-center border border-gray-200 shadow-lg rounded-xl bg-gradient-to-r ${card.color} hover:scale-105 transition-all`}
          >
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;