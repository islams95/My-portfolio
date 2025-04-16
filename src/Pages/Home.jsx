import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 text-white overflow-hidden">
      {/* Particle Layer */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 80, duration: 0.4 } },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              color: '#ffffff',
              distance: 120,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              outModes: { default: 'bounce' },
            },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Parallax Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 blur-3xl opacity-20 w-[700px] h-[700px] bg-pink-400 rounded-full animate-pulse pointer-events-none" style={{ top: '15%' }} />

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-purple-900 via-transparent to-transparent opacity-30 z-0 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-glow">
          Hi, I'm <span className="text-yellow-400">Islam Salah</span> 👋
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          <span className="text-blue-300 font-semibold">Software Testing Engineer</span> |
          <span className="text-green-300 font-semibold"> Front-End Developer</span>
          <br />
          <span className="text-sm md:text-base text-gray-200 font-light">
            <Typewriter
              words={[
                'Crafting automated pipelines...',
                'Delivering flawless UIs...',
                'Optimizing software quality...',
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </p>

        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-transform font-semibold rounded-xl shadow-lg"
        >
          Contact Me 🚀
        </Link>
      </motion.div>

      {/* Floating Feature Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 mt-10 px-4 pb-20">
        {[
          { title: '🧪 Testing Expertise', desc: 'Manual, automation, and performance testing.', color: 'from-blue-600 to-blue-400' },
          { title: '🚀 Automation Tools', desc: 'Selenium, TestNG, JMeter, Jenkins.', color: 'from-purple-600 to-purple-400' },
          { title: '🔧 CI/CD Integration', desc: 'Jenkins, GitHub Actions, DevOps pipelines.', color: 'from-pink-600 to-pink-400' },
          { title: '🌐 Front-End Knowledge', desc: 'React, Tailwind, JavaScript, Vite.', color: 'from-red-600 to-red-400' }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ y: 60, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`w-64 p-6 text-center border border-white/10 shadow-xl rounded-2xl bg-gradient-to-br ${card.color} hover:shadow-2xl transition-all`}
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