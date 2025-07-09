import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icons from "./Icons";
import { useTheme } from "../contexts/ThemeContext";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isDark, toggleTheme } = useTheme();

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="light flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-250">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <div className="flex items-center w-12">
            <a
              href="https://www.linkedin.com/in/sofiane-belhia-1696b5285/"
              target="_blank"
            >
              <Icons.LinkedIn />
            </a>

          </div>
          {/* Navigation */}
          <div className="flex items-center justify-between space-x-4 gap-12 text-white">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          {/* Theme Toggle */}
          <div className="flex items-center space-x-4 border border-gray-700 rounded-xs p-2 ">
            <button onClick={toggleTheme}>
              {isDark ? <Icons.Moon /> : <Icons.Sun />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex items-center justify-center flex-grow m-0 p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="h-16 pt-10 pb-10 bottom-0 text-sm text-gray-500 dark:text-gray-400 text-center mt-8 mb-4 flex flex-col md:flex-row justify-between px-6">
        <span>© 2025 Belhia Sofiane Portfolio</span>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
