import { useState, useEffect, useRef } from 'react';

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
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
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
                      <img src="https://placehold.co/400x400/e2e8f0/1e293b?text=Lawryan+Andrew" alt="Lawryan Andrew" className="rounded-full shadow-2xl mx-auto border-4 border-white"/>
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
          <section id="projects" className="py-24 px-6 border-2">
            <div className="text-center mb-16 reveal">
                <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
                <p className="text-gray-500 mt-2">A selection of my best work.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-gray-200 reveal">
                    <img src="https://placehold.co/600x400/e2e8f0/0ea5e9?text=Project+One" alt="Project 1" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Platform</h3>
                        <p className="text-gray-600 mb-4 text-sm">A full-stack e-commerce website with payment integration and an admin dashboard.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">React</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Node.js</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Stripe</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sky-500 hover:underline font-semibold">Live Demo</a>
                            <a href="#" className="text-gray-500 hover:underline">View Code</a>
                        </div>
                    </div>
                </div>
                {/* Project Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-gray-200 reveal">
                    <img src="https://placehold.co/600x400/e2e8f0/6366f1?text=Project+Two" alt="Project 2" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Data Visualization Dashboard</h3>
                        <p className="text-gray-600 mb-4 text-sm">An interactive dashboard for visualizing complex datasets using D3.js.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                             <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">JavaScript</span>
                            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">D3.js</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sky-500 hover:underline font-semibold">Live Demo</a>
                            <a href="#" className="text-gray-500 hover:underline">View Code</a>
                        </div>
                    </div>
                </div>
                {/* Project Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-gray-200 reveal">
                    <img src="https://placehold.co/600x400/e2e8f0/ec4899?text=Project+Three" alt="Project 3" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Task Manager</h3>
                        <p className="text-gray-600 mb-4 text-sm">A cross-platform mobile app for task management built with React Native.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">React Native</span>
                            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Firebase</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sky-500 hover:underline font-semibold">App Store</a>
                            <a href="#" className="text-gray-500 hover:underline">View Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          {/* Experience Section */}
          <section id="experience" className="py-24 border-2">
               <div className="text-center mb-10 reveal">
                  <h2 className="text-4xl font-bold text-gray-900">Career & Education</h2>
                  <p className="text-gray-500 mt-2">My professional journey and qualifications.</p>
              </div>
              <div className="max-w-3xl mx-auto">
                  <div className="relative border-l-2 border-gray-300 ml-4 pl-8 space-y-12">
                       {/* Timeline Item 1 */}
                      <div className="relative timeline-item reveal">
                          <h3 className="text-xl font-bold text-gray-900">Senior Web Developer</h3>
                          <p className="text-sky-600 font-semibold">Innovate Inc. | 2021 - Present</p>
                          <p className="text-gray-600 mt-2 text-sm">Leading front-end development for key client projects. Mentoring junior developers and implementing best practices for code quality and performance.</p>
                      </div>
                      {/* Timeline Item 2 */}
                      <div className="relative timeline-item reveal">
                          <h3 className="text-xl font-bold text-gray-900">Junior Developer</h3>
                          <p className="text-sky-600 font-semibold">Tech Solutions | 2019 - 2021</p>
                          <p className="text-gray-600 mt-2 text-sm">Developed and maintained client websites using WordPress, JavaScript, and PHP. Collaborated with designers to translate mockups into responsive web pages.</p>
                      </div>
                      {/* Timeline Item 3 */}
                      <div className="relative timeline-item reveal">
                          <h3 className="text-xl font-bold text-gray-900">B.S. in Computer Science</h3>
                          <p className="text-sky-600 font-semibold">University of Technology | 2015 - 2019</p>
                          <p className="text-gray-600 mt-2 text-sm">Graduated with honors. Focused on software engineering, algorithms, and human-computer interaction. President of the university coding club.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 text-center">
              <div className="reveal">
                  <h2 className="text-4xl font-bold text-gray-900">Let's Connect</h2>
                  <p className="text-gray-500 mt-2 mb-8 max-w-xl mx-auto">I'm currently available for freelance work and open to new opportunities. Feel free to reach out!</p>
                  <a href="mailto:hello@janedoe.com" className="inline-block bg-sky-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-sky-600 transition-colors duration-300 shadow-lg shadow-sky-500/30">
                      Say Hello
                  </a>
                  <div className="flex justify-center space-x-6 mt-12">
                       <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                      <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                      <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.297 1.634 4.208 3.803 4.649-.6.164-1.242.222-1.903.222-.32 0-.602-.03-.884-.083.643 1.876 2.446 3.243 4.604 3.282-1.624 1.272-3.667 2.031-5.88 2.031-.384 0-.76-.024-1.129-.065 2.099 1.347 4.605 2.132 7.29 2.132 8.514 0 13.3-7.258 13.01-13.684.89-.643 1.657-1.446 2.254-2.336z"/></svg></a>
                  </div>
              </div>
          </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
          <div className="container mx-auto px-6 py-6 text-center text-gray-500">
              <p>&copy; 2025 Jane Doe. Crafted with care.</p>
          </div>
      </footer>
    </>
  );
}

export default App;
