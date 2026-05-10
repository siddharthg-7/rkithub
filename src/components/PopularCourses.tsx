import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PopularCourses = () => {
  const courses = [
    {
      title: 'Java Full Stack',
      description: 'Master Java, Spring Boot, Hibernate, and Angular/React for building robust enterprise applications.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
      duration: '4 Months',
      path: '/courses/java-full-stack',
    },
    {
      title: 'Python Full Stack',
      description: 'Learn Python, Django, Flask, and frontend technologies to build dynamic web applications.',
      technologies: ['Python', 'Django', 'Vue.js', 'PostgreSQL'],
      duration: '4 Months',
      path: '/courses/python-full-stack',
    },
    {
      title: 'MERN Stack',
      description: 'Become a full-stack developer with MongoDB, Express.js, React, and Node.js.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      duration: '3 Months',
      path: '/courses/mern-stack',
    },
    {
      title: 'Data Science',
      description: 'Learn data analysis, visualization, and machine learning using Python and R.',
      technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Tableau'],
      duration: '4 Months',
      path: '/courses/data-science',
    },
    {
      title: 'AI & ML',
      description: 'Dive deep into Artificial Intelligence and Machine Learning with deep learning and NLP.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      duration: '4 Months',
      path: '/courses/ai-ml',
    },
    {
      title: 'Selenium Automation',
      description: 'Automate web application testing using Selenium WebDriver with Java or Python.',
      technologies: ['Selenium', 'Java', 'TestNG', 'Maven'],
      duration: '2.5 Months',
      path: '/courses/selenium',
    },
    {
      title: 'Cypress Testing',
      description: 'Modern end-to-end testing with Cypress for fast, easy and reliable testing for anything that runs in a browser.',
      technologies: ['Cypress', 'JavaScript', 'Mocha', 'Chai'],
      duration: '2 Months',
      path: '/courses/cypress',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#07294D] font-sans">Popular Courses</h2>
          <p className="text-gray-600 mt-2 font-sans">Our most in-demand industry-ready training programs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#07294D] mb-2 font-sans">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 font-sans flex-grow">{course.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.technologies.map((tech, j) => (
                    <span key={j} className="text-xs bg-blue-50 text-[#07294D] px-2.5 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <Link 
                    to={course.path} 
                    className="text-[#22C55E] hover:text-[#16A34A] font-bold text-sm flex items-center gap-1 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
