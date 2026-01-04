import React from 'react';
import wsib from '../images/wsib_innovation_lab_logo.jpeg';
import brock from '../images/brock_image.png';
import guelph from '../images/guelph_img.png';
import stem from '../images/stem_world_image.png';
import outlier from '../images/outlier.png';
import pgcwi from '../images/pgcwi_logo.png'; // You'll need to add this image

const experiences = [
  {
    company: 'PGCWI',
    role: 'AI Software Engineer',
    duration: 'Mar 2025 - Present',
    description: [
      'Used Convolutional Neural Networks (CNN), YoloV8 and EfficientNet Keras to create and train various object detection/alignment and classification models which resulted in efficient factory work and sped up their process by more than 50%.',
      'Worked across the full stack with React, Javascript, Tailwind, HTML and CSS for the frontend, while using Express, Javascript, and Swagger REST API for the backend.',
      'Utilized Docker to store containers for local uses, Microsoft Azure and SQL for the database to create a platform that acts as middleware between clients and sellers.',
    ],
    imgSrc: pgcwi,
    current: true
  },
  {
    company: 'Outlier',
    role: 'Software / Prompt Engineer',
    duration: 'Nov 2024 - May 2025',
    description: [
      'Trained various types of AI models by providing and rating coding prompts. Wrote prompts for AI to generate complex code and analyzed it based on Accuracy, Completeness, and Efficiency.',
      'Trained a SWE Bench AI model, analyzing and reverse engineering GitHub pull requests into issues. Ran and tested code changes ensuring no test coverage issues.',
    ],
    imgSrc: outlier,
  },
  {
    company: 'Workplace Safety Insurance Board',
    role: 'Full-Stack Developer',
    duration: 'Jan 2023 - August 2023',
    description: [
      'Developed a full-stack application that helps users automate coding by leveraging OpenAI\'s GPT-3.0 library.',
      'Implemented an application that detects workplace threats using Gen AI libraries like EDICT and YOLOv8 object detection model, reducing injury counts by 30%.',
      'Developed a cutting-edge React web application for comprehensive client information storage, resulting in a 40% reduction in data retrieval time.'
    ],
    imgSrc: wsib
  },
  {
    company: 'Brock Solutions',
    role: 'Full-Stack Developer',
    duration: 'May 2022 - Aug 2022',
    description: [
      'Worked across the entire stack using Vaadin and Java to develop web applications for company clients like Charter Dura-Bar.',
      'Adopted technologies like Docker Desktop and SSMS (SQL) to make applications more efficient, increasing usage by 30%.',
      'Directed and managed scrum meetings to track app development progress, achieving 95% on-time delivery rate.'
    ],
    imgSrc: brock
  },
  {
    company: 'Brock Solutions',
    role: 'Software Developer',
    duration: 'Sep 2021 - Dec 2021',
    description: [
      'Developed an IoT application providing integration layer between business and real-time operations.',
      'Integrated FactoryTalk Historian and Thingworx using PI Web API, providing real-time visualization and saving 100 man hours per week.',
      'Created a REST API to update production quantities and usage-based statistics using external plant metrics application.'
    ],
    imgSrc: brock
  },
  {
    company: 'University of Guelph',
    role: 'Recruitment and Data Analytics Assistant',
    duration: 'Jul 2021 - Aug 2021',
    description: [
      'Created detailed reports using Google Analytics and Google Data Studio to understand users and their activity.',
      'Conducted surveys to determine trends that resulted in a 20% increase in site activity.'
    ],
    imgSrc: guelph
  },
  {
    company: 'StemWorld Educational Services',
    role: 'ML Engineer',
    duration: 'May 2021 - May 2021',
    description: [
      'Created a neural network using Python, TensorFlow and Keras that recognizes hand-drawn letters.',
      'Worked with the game development team to help with project coordination.'
    ],
    imgSrc: stem
  }
];

const Experience = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Professional{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A journey through innovative projects and impactful contributions across various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 hidden lg:block"></div>
              
              {/* Experience Card */}
              <div className="lg:ml-20 group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {exp.company}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-400 mt-1">
                            {exp.role}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2">
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                              Current
                            </span>
                          )}
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {exp.description.map((desc, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Company Image */}
                    <div className="flex-shrink-0">
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <img 
                          src={exp.imgSrc} 
                          alt={`${exp.company} logo`}
                          className="relative w-24 h-24 lg:w-32 lg:h-32 object-contain bg-white/10 rounded-2xl p-4 border border-white/20 group-hover/img:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="text-gray-400 text-sm">More experiences coming soon</span>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;