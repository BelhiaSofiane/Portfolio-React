import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icons from './Icons'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])


  return (
    <div className="text-black dark:bg-gray-900 dark:text-white transition-colors duration-250 flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="sticky left-0 top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-40">
         <div className='flex justify-between items-center p-4' >
            {/* Logo */}
            <div className='flex items-center'>
              <span className='w-12 h-12'>
                <Icons.Terminal />
              </span>
              <p>
                B.Sofiane
              </p>
            </div>
            {/* Navigation */}
            <div className="bg-red-500 flex items-center justify-between space-x-4 gap-12  text-white">
              <Link to="/" >Home</Link>
              <Link to="/about" >About</Link>
              <Link to="/projects" >Projects</Link>
              <Link to="/contact" >Contact</Link>
            </div>
            {/* Theme Toggle */}
            <div className='flex items-center space-x-4'>
              <button onClick={() => setIsDark(!isDark)}>
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
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout