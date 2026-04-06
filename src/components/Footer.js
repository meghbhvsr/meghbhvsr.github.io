import React from 'react';

const Footer = () => (
  <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-white">Megh Bhavsar</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Software Developer passionate about creating innovative solutions and building 
            exceptional digital experiences with modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            <span className="text-lg">🔗</span>
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <a href="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm py-1">
              Home
            </a>
            <a href="/About" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm py-1">
              About
            </a>
            <a href="/Projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm py-1">
              Projects
            </a>
            <a href="/Experience" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm py-1">
              Experience
            </a>
            <a href="/Blog" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm py-1">
              Blog
            </a>
          </div>
        </div>

        {/* Connect Section */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            <span className="text-lg">🌐</span>
            Let's Connect
          </h3>
          <div className="flex flex-col space-y-3">
            <a 
              href="https://github.com/meghbhvsr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 transition-colors duration-300">
                <span className="text-sm">💻</span>
              </div>
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/meghbhvsr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                <span className="text-sm">💼</span>
              </div>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="mailto:megh@example.com" 
              className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-green-600/20 transition-colors duration-300">
                <span className="text-sm">📧</span>
              </div>
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Megh Bhavsar. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-50"></div>
    </div>

    {/* Background Pattern */}
    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none"></div>
  </footer>
);

export default Footer;