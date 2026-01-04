import React from 'react';
import grad from '../images/megh_grad_photo.jpg';
import onepiece from '../images/one-piece-img.jpg';

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Who is{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Megh Bhavsar
          </span>
          ?
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
        {/* Text Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
            <h2 className="text-2xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                🎓
              </span>
              Academic Background
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a recent graduate from the University of Guelph with a Bachelor's in Computing with{' '}
              <span className="text-indigo-400 font-semibold">Honours and Distinction</span>. 
              I have a major in Software Engineering and a minor in Statistics.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                💼
              </span>
              Professional Experience
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I have about <span className="text-purple-400 font-semibold">2 years of Software Development experience</span> throughout 
              the 5 co-op terms I have completed. At these positions, I've created various Full Stack applications 
              while leveraging AI and ML libraries. I continuously strive to become a better problem solver and 
              programmer by solving LeetCode problems and creating personal side projects.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                🎯
              </span>
              Career Goals
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am looking for a full-time <span className="text-green-400 font-semibold">Software Engineering, 
              Full Stack Development, or Software Development position</span> where I can continue to grow 
              and make meaningful contributions.
            </p>
          </div>
        </div>

        {/* Graduation Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src={grad} 
              alt="Megh Bhavsar Graduation Photo" 
              className="relative w-80 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-2xl">🎓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interests Section */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
        
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            🌟
          </span>
          Personal Interests & Hobbies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Anime Section */}
            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
              <h3 className="text-xl font-bold text-orange-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">📺</span>
                Anime Enthusiast
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about anime, with{' '}
                <span className="text-orange-400 font-semibold">One Piece</span> being my absolute favorite, 
                alongside Code Geass and Naruto. The storytelling and character development in these series 
                inspire my creative thinking in programming.
              </p>
            </div>

            {/* Sports Section */}
            <div className="p-6 bg-gradient-to-r from-purple-500/10 to-red-500/10 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏀</span>
                Basketball Fan
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I enjoy both watching and playing basketball. My favorite team is the{' '}
                <span className="text-red-400 font-semibold">Toronto Raptors</span> - their teamwork 
                and strategy resonate with my approach to collaborative software development.
              </p>
            </div>
          </div>

          {/* One Piece Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src={onepiece} 
                alt="One Piece - Favorite Anime" 
                className="relative w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="mt-16 text-center">
        <div className="inline-block p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
          <p className="text-lg text-gray-300 italic max-w-2xl">
            "Combining technical expertise with creative passion, I believe the best solutions come 
            from understanding both the code and the story it tells."
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export default About;