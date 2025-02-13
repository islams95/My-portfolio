import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' }, // 👈 Added Resume Link
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-700 to-purple-600 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white cursor-pointer">
          Islam Salah 🚀
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-lg font-medium ${
                  isActive
                    ? 'text-yellow-300 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-yellow-300'
                    : 'text-white hover:text-yellow-400'
                } transition-all`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Slide Down Animation) */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-800">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className="text-white text-xl hover:text-yellow-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;