import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

// Import project images
import project1 from "../../assets/Portfolio/project1.png";
import project2 from "../../assets/Portfolio/project2.png";
import project3 from "../../assets/Portfolio/project3.png";
import project4 from "../../assets/Portfolio/project4.png";
import project5 from "../../assets/Portfolio/project5.png";
import project6 from "../../assets/Portfolio/project6.png";
import project7 from "../../assets/Portfolio/project7.png";
import project8 from "../../assets/Portfolio/project8.jpg";
import project9 from "../../assets/Portfolio/project9.jpg";
import project10 from "../../assets/Portfolio/project10.jpg";
import project11 from "../../assets/Portfolio/project11.jpg";
import project12 from "../../assets/Portfolio/project12.jpg";


import men1 from "../../assets/imgReviews/men1.jpg"
import men2 from "../../assets/imgReviews/men2.jpg"
import women from "../../assets/imgReviews/women.jpg"


// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-50 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-2xl">
              {/* Project Image */}
              <div className="relative h-64 md:h-96 w-full">
                <img 
                  src={project.image} 
                  alt="Project" 
                  className="w-full h-full object-cover" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
                
                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-2 text-gray-800 hover:bg-white shadow-md"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
              
              {/* Project Info - Simplified */}
              <div className="p-6 md:p-8 flex flex-col items-center"> 
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-violet-100 text-violet-800 inline-block">
                    Web Development
                  </span>
                </div>
                
                <motion.a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-700 to-purple-800 text-white py-3 px-6 rounded-lg font-medium shadow-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Visit Website <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const PagePortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <div className="bg-white text-gray-900 min-h-screen mt-30">
      <ProjectsSection setSelectedProject={setSelectedProject} />
      <TestimonialsSection />
      
      {/* Project Popup Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};


const SectionWrapper = ({ children, id }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
      className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {children}
    </motion.section>
  );
};

// Section title component with animation
const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-16 text-center">
    <motion.h2 
      className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10 mb-5">{title}</span>
      <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-3 w-24 bg-gradient-to-r from-violet-400 to-purple-500 opacity-30 rounded-full"></span>
    </motion.h2>
    <motion.p 
      className="text-gray-600 max-w-2xl mx-auto text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {subtitle}
    </motion.p>
  </div>
);

// Projects Section
const ProjectsSection = ({ setSelectedProject }) => {
  const projects = [
    {
      id: 1,
      image: project1,
      website: "https://ati.ma/",
      color: "from-violet-600 to-purple-700"
    },
    {
      id: 2,
      image: project2,
      website: "https://skillsaffinity.com/",
      color: "from-purple-600 to-violet-700"
    },
    {
      id: 3,
      image: project3,
      website: "https://golden-transports.com/",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 4,
      image: project4,
      website: "https://petit-bateau.ma/",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 5,
      image: project5,
      website: "https://almassalik.com/",
      color: "from-violet-600 to-purple-700"
    },
    {
      id: 6,
      image: project6,
      website: "https://morocco-armenia.com/",
      color: "from-purple-600 to-violet-600"
    },
    {
      id: 7,
      image: project7,
      website: "https://logisticsworldtrade.com/",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 8,
      image: project8,
      website: "https://thelogisticnews.com/",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 9,
      image: project9,
      website: "https://sb-smires.com/",
      color: "from-violet-600 to-purple-700"
    },
    {
      id: 10,
      image: project10,
      website: "https://www.africphar.com/",
      color: "from-purple-600 to-violet-700"
    },
    {
      id: 11,
      image: project11,
      website: "https://cc-list.com/",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 12,
      image: project12,
      website: "https://confomat.ma/",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <SectionWrapper id="projects">
      <SectionTitle 
        title="Featured Projects" 
        subtitle="Explore Media Motion's recent work and see how we've helped businesses transform their digital presence with innovative solutions." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="rounded-xl overflow-hidden group relative cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6,
            delay: index * 0.1
          }
        }
      }}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
    >
      {/* Image with overlay */}
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/20 z-10 group-hover:bg-gray-900/10 transition-all duration-300" />
        <img 
          src={project.image} 
          alt="Project" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-0`} />
      </div>
      
      {/* Content */}
      <div className="relative z-20 p-6 bg-white">
        <motion.span 
          className="text-sm font-medium px-3 py-1 rounded-full bg-violet-100 text-violet-800 inline-block mb-3"
        >
          Web Development
        </motion.span>
        
        <motion.div 
          className="mt-4 flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            className="text-sm font-medium flex items-center gap-1 text-violet-700 hover:text-violet-800"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View Details <span className="ml-1">→</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      text: "Working with Media Motion transformed our online presence. The attention to detail and creative solutions exceeded our expectations.",
      avatar: men1
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, Bravo Inc",
      text: "Incredible work ethic and design talent. Our conversion rates improved by 40% after implementing the new website design by Media Motion.",
      avatar: men2
    },
    {
      name: "Emma Rodriguez",
      position: "Founder, Design Studio",
      text: "The most reliable agency we've worked with. Media Motion delivers on time, communicates clearly, and produces exceptional quality work.",
      avatar: women
    }
  ];

  return (
    <SectionWrapper id="testimonials" className="bg-gray-50">
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="Hear what our clients have to say about their experiences working with Media Motion." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="mb-4">
        {/* Quote marks */}
        <motion.svg 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none"
          className="text-violet-300"
        >
          <path d="M10 11L7 16H4L6 11V7H10V11ZM20 11L17 16H14L16 11V7H20V11Z" fill="currentColor" />
        </motion.svg>
      </div>
      
      <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-violet-500 to-purple-600 p-0.5">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PagePortfolio;