import React from 'react';
import weather from '../images/weather.jpg';
import snake from '../images/snakeBackground.png';
import assistant from '../images/assistant.png';
import chat from '../images/chat.png';
import rogue from '../images/rogue.png';
import gpx from '../images/gpx.png';

const projects = [
  {
    name: 'Weather App',
    techStack: 'Angular, TypeScript, HTML, SCSS, Bootstrap',
    date: 'December 2024',
    description: 'Built a web application that gets weather data from an API, and displays it for the user based on location and forecast.',
    img: weather,
    githubLink: 'https://github.com/meghbhvsr/WeatherApp',
    featured: true
  },
  {
    name: 'Virtual Assistant',
    techStack: 'Python, JavaScript, MySQL, HTML, Flask, OpenAI',
    date: 'June 2024',
    description: 'Created a Virtual Assistant that you can ask anything, have it set reminders, act as a calendar and send emails.',
    img: assistant,
    githubLink: 'https://github.com/meghbhvsr/VirtualAssistant',
    featured: true
  },
  {
    name: 'Arcade Games',
    techStack: 'HTML, JavaScript, CSS, PHP, Shell',
    date: 'April 2024',
    description: 'Built a website where users can play various types of arcade games and get a high score and compete with others.',
    img: snake,
    githubLink: 'https://github.com/meghbhvsr/ArcadeGames',
    featured: true
  },
  {
    name: 'Web Chat Application',
    techStack: 'JavaScript, HTML, CSS, Heroku, Node.js, Socket.IO',
    date: 'June 2021',
    description: 'Created a web application that allows users to communicate with other users in various chat rooms.',
    img: chat,
    githubLink: 'https://github.com/meghbhvsr/webchatapp'
  },
  {
    name: 'Rogue',
    techStack: 'Java, Gradle, Swing',
    date: 'December 2020',
    description: 'Implemented a dungeon roaming, rogue-like, role playing game, by leveraging OOP principles.',
    img: rogue,
    githubLink: 'https://github.com/meghbhvsr/RogueLike'
  },
  {
    name: 'GPX Website',
    techStack: 'C, HTML, JavaScript, CSS, Node.js, Socket.io',
    date: 'April 2021',
    description: 'Built a GPS website that allows you to create GPX files, and play around with them.',
    img: gpx,
    githubLink: 'https://github.com/meghbhvsr/GPXParser'
  }
];

const ProjectCard = ({ project, index }) => (
  <a 
    href={project.githubLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group block"
  >
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 h-full">
      {project.featured && (
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
            ⭐ Featured
          </span>
        </div>
      )}
      
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl mb-6">
        <img 
          src={project.img} 
          alt={`${project.name} preview`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-sm">🔗</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
            {project.name}
          </h3>
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
              {project.date}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.split(', ').map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        {/* GitHub Link Indicator */}
        <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">View on GitHub</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </div>
  </a>
);

const Projects = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Featured{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          A showcase of my technical skills and creative problem-solving through various web applications and software projects
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
            ⭐
          </span>
          Recent & Featured Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-16">
        <div className="inline-block p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl">🚀</span>
            Explore the Code
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Click on any project card to explore the source code and technical implementation on GitHub. 
            Each repository includes detailed documentation and setup instructions.
          </p>
          <div className="flex items-center justify-center gap-2 text-cyan-400">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Interactive project cards below</span>
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            📋
          </span>
          Additional Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(3).map((project, index) => (
            <ProjectCard key={index + 3} project={project} index={index + 3} />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          <span className="text-gray-400 text-sm">More projects in development</span>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;