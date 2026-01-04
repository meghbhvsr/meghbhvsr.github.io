import React from 'react';
import { Link } from 'react-router-dom';
import personal from '../images/personal1.jpg';

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-lg font-medium tracking-wide">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Megh
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
              Software Developer
            </h2>
          </div>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Passionate about creating innovative solutions and pushing the boundaries of technology. 
            Explore my journey through projects, experiences, and everything that defines my craft.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              to="/projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-center"
            >
              View My Work
            </Link>
            <a 
              href="mailto:sam.m.bhavsar@gmail.com?subject=Hello%20Megh%20-%20Portfolio%20Contact&body=Hi%20Megh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%21%0A%0A"
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src={personal} 
              alt="Megh - Software Developer" 
              className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-2xl">💻</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-purple-600/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-pink-600/20 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-600/20 rounded-full blur-md animate-ping"></div>
    </div>
  </div>
);

export default Home;