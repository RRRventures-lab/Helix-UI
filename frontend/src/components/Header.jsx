import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 text-white transform rotate-45"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/releases" 
              className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/releases' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Releases
            </Link>
            <Link 
              to="/about" 
              className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/merch" 
              className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/merch' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Merch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;