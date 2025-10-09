import { useState, useEffect, useRef } from 'react';

import pneuscan from './assets/pneuscan.png';
import safesip from './assets/safesip.png';
import welearn from './assets/welearn.png';
import hydro from './assets/hydro.jpg';
import research from './assets/research.png';
import ryan from './assets/ryan.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const typedTextSpan = useRef<HTMLSpanElement | null>(null);
  
  useEffect(() => {
    const textArray = ["passionate software engineer.", "Binus University student.", "computer science major."];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    let timeoutId: number;

    const type = () => {
      if (typedTextSpan.current) {
        if (charIndex < textArray[textArrayIndex].length) {
          typedTextSpan.current.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          timeoutId = window.setTimeout(type, typingDelay);
        } else {
          timeoutId = window.setTimeout(erase, newTextDelay);
        }
      }
    };

    const erase = () => {
      if (typedTextSpan.current) {
        if (charIndex > 0) {
          typedTextSpan.current.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
          charIndex--;
          timeoutId = window.setTimeout(erase, erasingDelay);
        } else {
          textArrayIndex++;
          if (textArrayIndex >= textArray.length) textArrayIndex = 0;
          timeoutId = window.setTimeout(type, typingDelay + 1100);
        }
      }
    };

    if (textArray.length) {
      timeoutId = window.setTimeout(type, newTextDelay + 250);
    }

    return () => clearTimeout(timeoutId);
  }, []); 
  
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const header = document.getElementById('header');

    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('py-2');
          header.classList.remove('py-4');
        } else {
          header.classList.add('py-4');
          header.classList.remove('py-2');
        }
      }
      
      const windowHeight = window.innerHeight;
      for (let i = 0; i < revealElements.length; i++) {
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <header id="header" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-900">LA</a>
            <nav className="hidden md:flex space-x-8 items-center">
                <a href="#about" className="text-gray-600 hover:text-sky-500 transition-colors">About</a>
                <a href="#projects" className="text-gray-600 hover:text-sky-500 transition-colors">Projects</a>
                <a href="#experience" className="text-gray-600 hover:text-sky-500 transition-colors">Experience</a>
                <a href="#contact" className="px-5 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300">Contact</a>
            </nav>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} id="mobile-menu-button" className="md:hidden text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
        <div id="mobile-menu" className={`${isMenuOpen ? '' : 'hidden'} md:hidden px-6 pt-2 pb-4 space-y-2`}>
            <a href="#about" className="block text-gray-600 hover:text-sky-500 transition-colors">About</a>
            <a href="#projects" className="block text-gray-600 hover:text-sky-500 transition-colors">Projects</a>
            <a href="#experience" className="block text-gray-600 hover:text-sky-500 transition-colors">Experience</a>
            <a href="#contact" className="block mt-2 px-5 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300 text-center">Contact</a>
        </div>
      </header>

      <main className="">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="gradient-text">Lawryan Andrew</span>
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-gray-600">
                  I'm a <span id="typed-text" ref={typedTextSpan} className="font-semibold text-gray-900"></span><span className="typed-cursor"></span>
              </p>
              <a href="#about" className="mt-12 animate-bounce bg-sky-500 text-white rounded-full p-3 shadow-lg shadow-sky-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
              </a>
          </section>

          {/* About Section */}
          <section id="about" className="flex w-screen h-screen justify-center items-center">
            <div className='flex justify-center items-center w-[75vw] h-[70vh]'>
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                  <div className="w-full md:w-1/3 reveal">
                      <img src={ryan} alt="Lawryan Andrew" className="rounded-full shadow-2xl mx-auto border-4 border-white"/>
                  </div>
                  <div className="w-full md:w-2/3 reveal">
                    <div className='flex flex-col gap-5'>
                      <h2 className="text-4xl font-bold text-gray-900">About me</h2>
                      <p className="text-gray-600 leading-relaxed mb-8">
                          I'm a passionate software engineer from Binus University who loves to explore new technologies and continuously improve my craft.
                      </p>
                    </div>

                    {/* --- INFO CARDS SECTION (No Changes Here) --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                        {/* Card 1: University */}
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center space-x-4">
                            <div className="bg-white p-2 rounded-full border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">BINUS University</p>
                                <p className="text-sm text-gray-600">Computer Science</p>
                            </div>
                        </div>
                        {/* Card 2: GPA */}
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center space-x-4">
                            <div className="bg-white p-2 rounded-full border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">GPA: 3.9</p>
                                <p className="text-sm text-gray-600">Academic</p>
                            </div>
                        </div>
                        {/* Card 3: Role */}
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center space-x-4">
                            <div className="bg-white p-2 rounded-full border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Part-time lab assistant</p>
                                <p className="text-sm text-gray-600">Current Role</p>
                            </div>
                        </div>
                    </div>

                    {/* --- NEW BUTTON GROUP SECTION --- */}
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Button 1: View My Work */}
                        <a 
                            href="#projects" 
                            className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300 flex items-center space-x-2"
                        >
                            <span>View My Work</span>
                            <span>&rarr;</span>
                        </a>
                        
                        {/* Button 2: View CV */}
                        <a 
                            href="/jane-doe-cv.pdf" 
                            download 
                            className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span>View CV</span>
                        </a>

                        {/* Link 3: Get In Touch */}
                        <a 
                            href="#contact" 
                            className="font-semibold text-gray-600 hover:text-sky-500 transition-colors"
                        >
                            Get In Touch
                        </a>
                    </div>

                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 flex justify-center">
            <div className="flex flex-col w-full max-w-[75vw]">
                <div className="text-center reveal mb-8">
                    <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
                    <p className="text-gray-500 mt-2">A selection of my best work.</p>
                </div>
                <div className='flex flex-col gap-20'>
                    {/* --- NEW 2-COLUMN PROJECT GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* --- Project Card 1 --- */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 reveal">
                            <img 
                                src={pneuscan} 
                                alt="Project 1"
                                className="h-56 w-full object-contain bg-gray-100"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">PneuScan</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    A full-stack web application that leverages a TensorFlow model to detect signs of pneumonia from chest X-ray images.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">React</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Node.js</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">HTML CSS</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">TypeScript</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Python</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Flask</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Machine Learning</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href="https://pneuscan.vercel.app" target="_blank" className="px-5 py-2.5 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <span>View Projects</span>
                                    </a>
                                    <a 
                                        href="https://github.com/Ryan0050/PneuScan" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* --- Project Card 2 --- */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 reveal">
                            <img 
                                src={safesip} 
                                alt="Project 2" 
                                className="h-56 w-full object-contain bg-gray-100"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">SafeSip</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    web application that analyzes water quality metrics to predict whether the water is potable and safe to drink.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Python</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Streamlit</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Jupyter Notebook</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Machine Learning</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href="https://safesip.streamlit.app" target="_blank" className="px-5 py-2.5 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <span>View Projects</span>
                                    </a>
                                    <a 
                                        href="https://github.com/Ryan0050/SafeSip" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Add more project cards here following the same structure */}

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 reveal">
                            <img 
                                src={welearn} 
                                alt="Project 3" 
                                className="h-56 w-full object-contain bg-gray-100"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">WeLearn</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    A Student led peer-to-peer online tutoring platform that connect tutees with tutors for personalized learning experiences.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Next.js</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">PostgreSQL</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Clerk</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Xendit</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">TypeScript</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">JavaScript</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">CSS</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href="" target="_blank" className="px-5 py-2.5 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <span>View Projects</span>
                                    </a>
                                    <a 
                                        href="https://github.com/reynardaj/WeLearn" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 reveal">
                            <img 
                                src={hydro}
                                alt="Project 4" 
                                className="h-56 w-full object-contain bg-gray-100"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">HydroGoal</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    A smart hydration companion that uses AI to verify intake, calculate personalized goals, and features a clean animated interface.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Flutter</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Firebase</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Gemini API</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Dart</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href="https://safesip.streamlit.app" target="_blank" className="px-5 py-2.5 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <span>View Projects</span>
                                    </a>
                                    <a 
                                        href="https://github.com/Ryan0050/HydroGoal" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 reveal">
                            <img 
                                src={research} 
                                alt="Project 5" 
                                className="h-56 w-full object-contain bg-gray-100"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Research Paper</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    Published Reseacrh Paper about Real-Time Waste Detection Using YOLO, SSD, and Faster R-CNN Integrated with CNN-Based Classification. Accepted at 1st International Conference on Research and Innovations in Information and Engineering Technology 2025 (RITECH)
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">CNN</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">YOLO</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">SSD</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Faster R-CNN</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Object Detection</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Classification</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Data Analysis</span>
                                    <span className="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-md text-xs">Research Methods</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href="https://drive.google.com/file/d/1xo3yQn-_yK9ZStj9w2mg-wkD6eB3Yq4W/view?usp=sharing" target="_blank" className="px-5 py-2.5 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <span>View Paper</span>
                                    </a>
                                    <a 
                                    href="https://drive.google.com/file/d/1efrIa9XEtelVM0_x7x2v5FCsCDIDtIOH/view?usp=drive_link" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                        </svg>
                                        <span>Video</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24">
            <div className="text-center mb-10 reveal">
                <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
                <p className="text-gray-500 mt-2">My professional journey and qualifications.</p>
            </div>
            <div className="max-w-3xl mx-auto mb-20">
                <div className="relative border-l-2 border-gray-300 ml-4 pl-8 space-y-12">
                    <div className="relative timeline-item reveal">
                        <h3 className="text-xl font-bold text-gray-900">Part-time Software Laboratory Assistant</h3>
                        <p className="text-sky-600 font-semibold">Laboratory Center (LCAS) | September 2025 - Present</p>
                        <p className="text-gray-600 mt-2 text-sm">A Part-time Laboratory Software Assistant, teaching and guiding students through practical software exercises and lab work.</p>
                    </div>
                    <div className="relative timeline-item reveal">
                        <h3 className="text-xl font-bold text-gray-900">UREEKA Member</h3>
                        <p className="text-sky-600 font-semibold">UREEKA Organization | March 2025 - Present</p>
                        <p className="text-gray-600 mt-2 text-sm">An active UREEKA member, sharpening my skills through specialized AI training and practical project development.</p>
                    </div>
                    <div className="relative timeline-item reveal">
                        <h3 className="text-xl font-bold text-gray-900">Binus Scholarship Mentor</h3>
                        <p className="text-sky-600 font-semibold">Bina Nusantara University | February 2025 - July 2025</p>
                        <p className="text-gray-600 mt-2 text-sm">A Binus Scholarship Mentor, guiding and supporting fellow students to achieve academic and personal success.</p>
                    </div>
                </div>
            </div>
            <div className="text-center mb-10 reveal">
                <h2 className="text-4xl font-bold text-gray-900">Education</h2>
                <p className="text-gray-500 mt-2">My academic background and qualifications.</p>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-gray-300 ml-4 pl-8 space-y-12">
                    <div className="relative timeline-item reveal">
                        <h3 className="text-xl font-bold text-gray-900">Bachelor of Computer Science</h3>
                        <p className="text-sky-600 font-semibold">Bina Nusantara Univeristy | 2023 - 2027</p>
                        <p className="text-gray-600 mt-2 text-sm">Second year Computer Science student at Binus University (Intelligent Systems specialization).</p>
                    </div>
                </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-25 text-center">
              <div className="reveal">
                  <h2 className="text-4xl font-bold text-gray-900">Let's Connect</h2>
                  <p className="text-gray-500 mt-2 mb-8 max-w-xl mx-auto">I'm currently available and open to new opportunities. <br /> Feel free to reach out!</p>
                  <a href="mailto:lawryan.darisang@binus.ac.id" className="inline-block bg-sky-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-sky-600 transition-colors duration-300 shadow-lg shadow-sky-500/30">
                      Say Hello
                  </a>
                  <div className="flex justify-center space-x-6 mt-12">
                    <a href="https://github.com/Ryan0050" target="_blank" className="text-black-500 transition-opacity hover:opacity-80"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                    <a href="https://www.linkedin.com/in/lawryan-andrew-17086b2b8" target="_blank" className="text-blue-500 transition-opacity hover:opacity-80"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                    <a href="mailto:lawryan0511@gmail.com" className="text-gray-500 transition-opacity hover:opacity-80"><svg className="w-8 h-8" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.42-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#34A853" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#FBBC05" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path></svg>
                    </a>
                  </div>
              </div>
          </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
          <div className="container mx-auto px-6 py-6 text-center text-gray-500">
              <p>&copy; 2025 Portfolio by Lawryan Andrew</p>
          </div>
      </footer>
    </>
  );
}

export default App;
