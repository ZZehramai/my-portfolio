import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Facebook, Instagram, ArrowRight, 
  Sun, Moon, Mail, MapPin, Send, Terminal, Wrench, User, ChevronDown, Download, FileText, CheckCircle
} from 'lucide-react';


const App = () => {

  // --- THE BULLETPROOF SCROLL FUNCTION ---
  const handleScroll = (e, id) => {
    e.preventDefault(); // 1. Stops the URL from changing
    e.stopPropagation(); // 2. Stops any other events from firing
    
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90; // The height of your navigation bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.history.replaceState(null, null, ' ');
    }
  }
  // Theme State (Start with Dark Mode)
const [isDark, setIsDark] = useState(true);
const [activeTab, setActiveTab] = useState('Tech');
const toggleTheme = () => setIsDark(!isDark);
const [status, setStatus] = useState("IDLE");




// Put this near your isDark state
const [expandedIndex, setExpandedIndex] = useState(null);

const toggleProject = (index) => {
  setExpandedIndex(expandedIndex === index ? null : index);
};
    
  // Dynamic Background and Text Colors
  const themeClasses = isDark 
    ? "bg-[#050a18] text-white" 
    : "bg-slate-50 text-slate-900";

  const navClasses = isDark 
    ? "bg-[#050a18]/80 border-white/5" 
    : "bg-white/80 border-slate-200";
    const socials = [
  { Icon: Facebook, link: "https://facebook.com/zehra.308883" },
  { Icon: Instagram, link: "https://instagram.com/ingyin257" },
  { Icon: Linkedin, link: "https://www.linkedin.com/in/ingyin-hmwe-903952239/" },
  { Icon: Github, link: "https://github.com/ZZehramai" }
];

const skillsData = {
  Tech: {
    desc1: "Technical Skills",
    desc: "Strong foundation in programming and web development technologies, with experience building efficient and scalable applications.",
    items: [
      { name: "React JS", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Java", level: 95 },
      { name: "Python", level: 93 },
      { name: "MySQL", level: 85 },

    ]
  },
  Tools: {
    desc1: "Tools",
    desc: "Proficient in using modern development tools and environments to streamline coding, debugging, and project management workflows.",
    items: [
      { name: "GitHub & Git", level: 95 },
      { name: "Figma", level: 88 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 98 },
      { name: "Draw.io", level: 98 },
    ]
  },
  "Soft Skills": {
    desc1: "Soft Skills",
    desc: "Good communication, teamwork, and problem-solving abilities, with a proactive approach to learning and adapting in collaborative environments.",
    items: [
      { name: "Communication", level: 95 },
      { name: "Teamwork", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Leadership", level: 85 },
      { name: "Adaptability", level: 95 },
    ]
  }
};

const myProjects = [
  {
    title: "Online Voting System",
    category: "React & Firebase",
    image: "votingproject.jpeg",
    description: "Created an Online Voting System to simplify the voting process, with secure login, vote tracking, and efficient handling of election data.",
    link: "#"
  },
  {
    title: "Xpense Tracker System",
    category: "Full Stack Development",
    image: "budgetproject.png",
    description: "Built an Expense Tracker Management System to help users keep track of their daily income and expenses. It allows easy recording, categorizing, and viewing of spending.",
    link: "#"
  },
  {
    title: "Smart Waste Soring System",
    category: "Based AIOT",
    image: "image.png",
    description: "Built a Smart Waste Sorting System that automatically classifies different types of waste using basic automation and logic. It helps improve recycling efficiency and reduce manual sorting.",
    link: "#"
  }
];
const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.target;
    const formData = new FormData(form);

    // Replace 'YOUR_FORM_ID' with the ID you get from formspree.io
    const response = await fetch("https://formspree.io/f/mbdpjpyl", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };
  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${themeClasses}`}>
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b transition-all ${navClasses}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
      {/* 1. This is your Logo Image */}
      <img 
        src="mylogo.svg"  // <-- Change this to your actual filename in the public folder
        alt="Logo" 
        className="w-10 h-10 object-contain rounded-md" 
      />
      
      {/* 2. This is your Name */}
      <span className={`text-xl font-black tracking-tighter uppercase ${isDark ? 'text-white' : 'text-[#050a18]'}`}>
        Ingyin
      </span>
    </div>

          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
  <button onClick={(e) => handleScroll(e, 'home')} className="hover:text-blue-500 transition cursor-pointer">Home</button>
  <button onClick={(e) => handleScroll(e, 'about')} className="hover:text-blue-500 transition cursor-pointer">About Me</button>
  <button onClick={(e) => handleScroll(e, 'skills')} className="hover:text-blue-500 transition cursor-pointer">Skills</button>
  <button onClick={(e) => handleScroll(e, 'projects')} className="hover:text-blue-500 transition cursor-pointer">Projects</button>
  <button onClick={(e) => handleScroll(e, 'contact')} className="hover:text-blue-500 transition cursor-pointer text-left">Contact</button>
</div>
          
             <div className="flex items-center gap-4">
            {/* THEME TOGGLE BUTTON */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${isDark ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* --- SIMPLE DOWNLOAD CV BUTTON --- */}
<a
  href="/IngyinHmwe_CV.pdf" // 1. Path to your PDF in the public folder
  download="IngyinHmwe_CV.pdf" // 2. This triggers the download
  className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-7 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 cursor-pointer transition-all border-none no-underline"
>
  {/* The Icon */}
  <Download size={16} />
  
  {/* The Text */}
  <span>Download CV</span>
</a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header id="home" className="pt-30 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-8 block">
            Software Engineer
            </span>
          <h1 className={`text-5xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
    Hi! I'm <span className="font-extrabold">Ingyin Hmwe</span>
  </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-8 italic tracking-tight">
    I'M A DEVELOPER <span className={`font-light not-italic ${isDark ? 'text-white/20' : 'text-slate-300'}`}>/</span>
  </h2>
          <p className={`max-w-md text-base md:text-lg leading-relaxed mb-10 font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
    Building high-performance applications and crafting seamless user experiences with modern tech stacks.
  </p>
          <div className="flex flex-wrap gap-6 items-center">
            <motion.a
  // 1. Link Settings
  href="#contact"
  onClick={(e) => handleScroll(e, 'project')} // Uses the smooth scroll function
  
  // 2. Alive Animations
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  
  // 3. Styling
  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-blue-600/30 cursor-pointer transition-colors hover:bg-blue-700 inline-flex"
>
  Get in Touch
  
  {/* Arrow Icon that moves */}
  <motion.span
    variants={{ hovered: { x: 5 } }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <ArrowRight size={18} />
  </motion.span>
</motion.a>

            <div className="flex gap-3 mt-4">
  {socials.map(({ Icon, link }, i) => (
    <motion.a
      key={i}
      href={link}
      target="_blank"           // Opens in a new tab
      rel="noopener noreferrer" // Security best practice
      
      // ANIMATION: This makes it "alive"
      whileHover={{ 
        scale: 1.2, 
        rotate: 5,
        backgroundColor: "#2563eb", // Turns blue on hover
        borderColor: "#2563eb",
        
      }}
      whileTap={{ scale: 0.9 }} // Shrinks slightly when clicked
      
      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
        isDark 
        ? 'border-white/10 text-white bg-white/5' 
        : 'border-slate-300 text-slate-600 bg-white shadow-sm'
      }`}
    >
      <Icon size={20} />
    </motion.a>
  ))}
</div>
          </div>
        </motion.div>
        
        {/* FIXED: Added max-w-md to stop the image from growing too big */}
        <div className="relative flex justify-center items-center">
          <div className={`absolute w-[110%] h-[110%] border rounded-full transition-opacity ${isDark ? 'border-white/5' : 'border-slate-200'}`}></div>
          <div className="relative z-10 bg-gradient-to-t from-blue-600/20 to-transparent p-4 rounded-b-full overflow-hidden max-w-md">
            <img 
              src="me.jpg" 
              alt="Ingyin" 
              className={`rounded-t-[200px] w-full object-cover transition-all duration-700 ${isDark ? 'grayscale hover:grayscale-0' : ''}`}
            />
          </div>
        </div>
      </header>

      {/* --- About me Section --- */}
      <section id="about" className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-15 items-center">
        <div className="relative">
          <div className="absolute -left-10 bottom-0 w-40 h-30 bg-blue-600/20 rounded-full blur-2xl"></div>
          <div className="relative border-4 border-blue-600/30 rounded-full p-4">
             <img 
               src="me1.jpg" 
               alt="About" 
               className="rounded-full w-full aspect-square object-cover"
             />
          </div>
        </div>
        <div>
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">About Me</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8 leading-tight uppercase">
            I AM AVAILABLE FOR <br/> <span className="text-blue-500">SOFTWARE PROJECTS</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I build modern digital experiences that are fast, accessible, and beautiful. 
            My engineering process focuses on scalability and clean code architecture.
          </p>
          <div className="grid grid-cols-3 gap-8 border-b border-white/10 pb-10 mb-10">
            <div><h4 className="text-3xl font-black">280+</h4><p className="text-[10px] text-gray-500 uppercase font-bold mt-2">Satisfied Clients</p></div>
            <div><h4 className="text-3xl font-black">15+</h4><p className="text-[10px] text-gray-500 uppercase font-bold mt-2">Projects Finished</p></div>
            <div><h4 className="text-3xl font-black">02+</h4><p className="text-[10px] text-gray-500 uppercase font-bold mt-2">Years Experience</p></div>
          </div>

        <motion.a
  // 1. Link Settings
  href="#projects"
  onClick={(e) => handleScroll(e, 'project')} // Uses the smooth scroll function
  
  // 2. Alive Animations
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  
  // 3. Styling
  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer transition-colors hover:bg-blue-700 inline-flex"
>
  View Projects
  
  {/* Arrow Icon that moves */}
  <motion.span
    variants={{ hovered: { x: 5 } }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <ArrowRight size={18} />
  </motion.span>
</motion.a>

        </div>
      </section>

    {/* --- Ultra-Compact Interactive Skills Section --- */}
<section id="skills" className="py-12 px-6 scroll-mt-10">
  <div className={`max-w-5xl mx-auto p-8 md:p-12 rounded-[32px] border transition-all ${isDark ? 'bg-[#030813] border-white/5' : 'bg-white border-slate-200 shadow-xl'}`}>
    
    {/* 1. Header Area (Tightened) */}
    <div className="grid md:grid-cols-2 gap-6 mb-10 items-end text-left">
      <div>
        <span className="text-blue-500 font-bold uppercase tracking-widest text-[9px]">Skills & Tech</span>
        <h2 className={`text-3xl md:text-4xl font-black mt-2 leading-tight uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {skillsData[activeTab].desc1}
        </h2>
      </div>
      <div>
        <p className={`text-[11px] leading-relaxed opacity-50 font-medium max-w-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
          {skillsData[activeTab].desc}
        </p>
      </div>
    </div>

    {/* 2. Category Selectors (Smaller Pills) */}
    <div className="flex justify-center gap-4 md:gap-8 mb-12">
      {Object.keys(skillsData).map((tab) => (
        <motion.div
          key={tab}
          onClick={() => setActiveTab(tab)}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer relative w-20 md:w-24 aspect-[3/4.5] rounded-full border-2 flex flex-col items-center justify-center transition-all duration-500 ${
            activeTab === tab 
            ? 'border-blue-500 bg-blue-600/10 shadow-[0_0_20px_rgba(37,99,235,0.15)]' 
            : 'border-white/5 opacity-30 grayscale hover:opacity-100 hover:border-white/20'
          }`}
        >
          {/* Icons scaled down */}
          {tab === "Tech" && <Terminal size={24} className="text-blue-500" />}
          {tab === "Tools" && <Wrench size={24} className="text-blue-500" />}
          {tab === "Soft Skills" && <User size={24} className="text-blue-500" />}
          
          <span className={`mt-3 text-[8px] font-black uppercase tracking-widest ${activeTab === tab ? 'text-white' : 'text-gray-500'}`}>
            {tab}
          </span>
        </motion.div>
      ))}
    </div>

    {/* 3. The Animated Bars (Compact Grid) */}
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
      <AnimatePresence mode="wait">
        {skillsData[activeTab].items.map((skill, index) => (
          <motion.div 
            key={activeTab + skill.name} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: index * 0.04 }}
            className="space-y-3 text-left"
          >
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{skill.name}</span>
              <span className="text-[10px] font-black text-blue-500">{skill.level}%</span>
            </div>
            
            <div className={`relative h-[1px] w-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "circOut" }}
                className="absolute h-full bg-blue-500"
              >
                {/* The Handle / Dot (Smaller) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full border-[2px] border-blue-600 shadow-md" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

  </div>
</section>

{/* --- Recent Projects Section (Interactive Expansion) --- */}
<section id="projects" className={`py-12 px-5 scroll-mt-12 transition-colors duration-500 ${isDark ? 'bg-[#030813]' : 'bg-slate-50'}`}>
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-8">
      <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Portfolio</span>
      <h2 className={`text-3xl md:text-5xl font-black mt-2 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Projects that I've Built
      </h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {myProjects.map((project, index) => (
        <motion.div 
          key={index} 
          layout // This makes the card grow smoothly
          className={`rounded-[32px] overflow-hidden border transition-all ${
            isDark 
            ? 'bg-white/5 border-white/5' 
            : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          {/* Image Container */}
          <div className={`p-4 ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover shadow-lg" />
            </div>
          </div>

          {/* Text Content */}
          <div className="p-5">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h4 className={`text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h4>
                <p className="text-blue-500 text-[10px] font-bold uppercase tracking-wider">{project.category}</p>
              </div>
              
              {/* THE ALIVE ARROW BUTTON */}
              <motion.button 
                onClick={() => toggleProject(index)}
                animate={{ rotate: expandedIndex === index ? 180 : 0 }} // UPSIDE DOWN ANIMATION
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md shadow-blue-600/20"
              >
                <ChevronDown size={20} />
              </motion.button>
            </div>

            {/* THE EXPLANATION PASSAGE */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className={`pt-4 text-xs leading-relaxed border-t mt-2 ${isDark ? 'text-gray-400 border-white/10' : 'text-slate-600 border-slate-100'}`}>
                    {project.description}
                  </p>
                  
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  
      {/* --- Contact Section --- */}
<section id="contact" className={`py-10 px-6 scroll-mt-10 transition-colors duration-500 ${isDark ? 'bg-[#050a18]' : 'bg-slate-50'}`}>
  <div className="max-w-7xl mx-auto w-full">
    
    <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
      {/* Left side: Text */}
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2 className="text-5xl md:text-6xl font-[900] italic text-blue-600 uppercase tracking-tighter mb-6">
          Contact Me
        </h2>
        <p className={`max-w-sm text-sm md:text-base leading-relaxed opacity-80 font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
         Feel free to reach out for collaborations, opportunities, or questions.
        </p>
      </motion.div>

      {/* Right side: The Form Card */}
      <div className={`p-8 rounded-[32px] border transition-all ${isDark ? 'bg-[#0b1327] border-white/5 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'}`}>
        {status === "SUCCESS" ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 font-bold">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
            <p className="text-sm opacity-60 mb-6 font-medium">Thank you! I will get back to you soon.</p>
            <button onClick={() => setStatus("IDLE")} className="text-blue-500 font-bold text-xs uppercase underline">Send another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-bold opacity-60 uppercase ml-1">Name</label>
                <input name="name" type="text" required placeholder="Your Name" className={`w-full px-5 py-3 rounded-xl outline-none border transition-all ${isDark ? 'bg-white/5 border-white/5 text-white' : 'bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400'}`} />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-bold opacity-60 uppercase ml-1">Email</label>
                <input name="email" type="email" required placeholder="email@example.com" className={`w-full px-5 py-3 rounded-xl outline-none border transition-all ${isDark ? 'bg-white/5 border-white/5 text-white' : 'bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400'}`} />
              </div>
            </div>
            <div className="space-y-1 text-left">
              <label className="text-[10px] font-bold opacity-60 uppercase ml-1">Message</label>
              <textarea name="message" rows="4" required placeholder="Type your message here..." className={`w-full px-5 py-3 rounded-xl outline-none border transition-all resize-none ${isDark ? 'bg-white/5 border-white/5 text-white' : 'bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400'}`}></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "SENDING"}
              className={`w-full font-bold py-4 rounded-xl transition shadow-lg text-xs uppercase tracking-widest flex items-center justify-center gap-2 ${
                status === "SENDING" ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 text-white'
              }`}
            >
              {status === "SENDING" ? "Sending..." : "Send message"}
              {status !== "SENDING" && <Send size={14} />}
            </button>
          </form>
        )}
      </div>
    </div>

    {/* PART 2: Fastest Response (Vertical Stack) */}
    <div className="text-center mb-20">
      <h3 className={`text-xl md:text-2xl font-black tracking-tight mb-3 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
        For fastest response?
      </h3>
      <p className={`text-sm font-bold opacity-60 mb-4 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
        You can also contact me directly via email or telegram.
      </p>
      
      {/* Buttons directly under the heading */}
      <div className="flex flex-row justify-center items-center gap-4">
        <motion.a 
          whileHover={{ y: -2 }} 
          href="https://t.me/IngyinHmwe" 
          className="flex items-center gap-2 bg-[#2ca5e0] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-blue-400/20"
        >
          <Send size={16} /> Telegram
        </motion.a>
        
        <motion.a 
          whileHover={{ y: -2 }} 
          href="mailto:ingyinhmwe28@gmail.com" 
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs border transition-all ${
            isDark 
            ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
            : 'bg-[#f1f5f9] border-slate-200 text-[#0f172a] hover:bg-slate-200 shadow-sm'
          }`}
        >
          <Mail size={16} /> Email Me
        </motion.a>
      </div>
    </div>

    {/* PART 3: Simple Copyright (Cleaned up) */}
    <div className="text-center pt-8 border-t border-white/5 opacity-30">
      <p className="text-[9px] font-bold uppercase tracking-[0.3em]">
        © 2026 INGYINHMWE — ALL RIGHTS RESERVED
      </p>
    </div>

  </div>
</section>

    </div>
  );
};

export default App;