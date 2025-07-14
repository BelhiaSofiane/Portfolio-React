import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Mock Icons component for demonstration
const Icons = {
  LinkedIn: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Moon: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
    </svg>
  ),
  Sun: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
    </svg>
  )
};

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');
  const location = useLocation();

  // Monitor body class changes
  useEffect(() => {
    const observeBodyClass = () => {
      const bodyClass = document.body.className;
      if (bodyClass.includes('dark')) {
        setCurrentTheme('dark');
      }  else {
        setCurrentTheme('light');
      }
    };

    // Initial check
    observeBodyClass();

    // Create a MutationObserver to watch for class changes
    const observer = new MutationObserver(observeBodyClass);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    const themes = ['light', 'dark', 'red'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    // Remove all theme classes and add the new one
    document.body.className = nextTheme;
    setCurrentTheme(nextTheme);
  };

  return (
    <div 
      className="flex flex-col min-h-screen transition-colors duration-250"
      style={{
        backgroundColor: `rgba(var(--background))`,
        color: `rgba(var(--copy-primary))`
      }}
    >
      {/* Navbar */}
      <nav 
        className="sticky top-0 z-40 w-full transition-colors duration-250"
        style={{
          backgroundColor: `rgba(var(--card))`,
          borderBottom: `1px solid rgba(var(--border))`
        }}
      >
        <div className="flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <div className="flex items-center w-12">
            <a
              href="https://www.linkedin.com/in/sofiane-belhia-1696b5285/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `rgba(var(--copy-primary))` }}
              className="hover:opacity-80 transition-opacity"
            >
              <Icons.LinkedIn />
            </a>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between space-x-4 gap-12">
            <Link 
              to="/" 
              style={{ color: `rgba(var(--copy-primary))` }}
              className="hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <Link 
              to="/about"
              style={{ color: `rgba(var(--copy-primary))` }}
              className="hover:opacity-80 transition-opacity"
            >
              About
            </Link>
            <Link 
              to="/projects"
              style={{ color: `rgba(var(--copy-primary))` }}
              className="hover:opacity-80 transition-opacity"
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              style={{ color: `rgba(var(--copy-primary))` }}
              className="hover:opacity-80 transition-opacity"
            >
              Contact
            </Link>
          </div>
          
          {/* Theme Toggle */}
          <div 
            className="flex items-center space-x-4 rounded-sm p-2 transition-colors duration-250"
            style={{
              border: `1px solid rgba(var(--border))`,
              backgroundColor: `rgba(var(--card))`
            }}
          >
            <button 
              onClick={toggleTheme}
              style={{ color: `rgba(var(--copy-primary))` }}
              className="hover:opacity-80 transition-opacity"
            >
              {currentTheme === 'dark' ? <Icons.Moon /> : <Icons.Sun />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main 
        className="flex items-center justify-center flex-grow m-0 p-0 transition-colors duration-250"
        style={{ backgroundColor: `rgba(var(--background))` }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer 
        className="h-16 pt-10 pb-10 bottom-0 text-sm text-center mt-8 mb-4 flex flex-col md:flex-row justify-between px-6 transition-colors duration-250"
        style={{ color: `rgba(var(--copy-secondary))` }}
      >
        <span>© 2025 Belhia Sofiane Portfolio</span>
        <div className="space-x-4">
          <a 
            href="#" 
            className="hover:underline transition-colors duration-250"
            style={{ color: `rgba(var(--copy-secondary))` }}
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="hover:underline transition-colors duration-250"
            style={{ color: `rgba(var(--copy-secondary))` }}
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;