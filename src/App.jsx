import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import { listTools, listProyek, listExperience } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; 
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact/contact";
import Aurora from "./components/Aurora/Aurora";


function App() {
  const aboutRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);
const [selectedExperience, setSelectedExperience] = useState(null);
  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
  <>

    <div className="fixed inset-0 bg-black -z-50" />

    <div className="absolute top-0 left-0 w-full h-[100vh] -z-40 pointer-events-none">
      <Aurora
  colorStops={["#11385e", "#1f2da6", "#123699"]}
  blend={0.6}
  amplitude={1.2}
  speed={0.6}
/>
    </div>

    <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-black/40 to-black" />
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">

      <div className="hero grid md:grid-cols-2 items-center pt-10 gap-6">
        <div data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6 bg-zinc-900/80 backdrop-blur w-fit p-4 rounded-2xl border border-white/10">
            <img src="./assets/revaa.PNG" className="w-10 rounded-md" />
            <q className="text-white/80">Creative Tech & IT Enthusiast</q>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-white">
            <ShinyText text="Hi I'm Revanda Avrillita" speed={3} />
          </h1>

          <BlurText
            text="A Frontend Developer passionate about building responsive and userfriendly websites, with a keen interest in UI/UX design and digital experiences."
            delay={150}
            animateBy="words"
            direction="top"
            className="mb-6 text-white/80"
          />

          <div className="flex gap-3">
            <a href="./assets/CV 2.pdf" className="bg-zinc-900/80 backdrop-blur px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition">
              Download CV
            </a>
            <a href="#project" className="bg-zinc-900/80 backdrop-blur px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition">
              Explore My Projects
            </a>
          </div>
        </div>

        <div className="md:ml-auto" data-aos="fade-left">
          <ProfileCard
            name="Reva"
            title="Junior Frontend Developer"
            handle="revandavrillita"
            status="Online"
            contactText="Contact Me"
            avatarUrl="./assets/revaa.PNG"
            showUserInfo={true}
            enableTilt={true}
          />
        </div>
      </div>

      {/* ABOUT */}
      <section
        className="mt-24 p-8 bg-zinc-900/80 backdrop-blur rounded-2xl border border-violet-500/60"
        id="about"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <BlurText
          text={`Hi, I’m Reva, a student in Educational Technology & IT at Universitas Negeri Surabaya (UNESA). I’m passionate about data analysis and transforming raw data into actionable insights. I enjoy discovering patterns, understanding trends, and applying them to real-world challenges.

I am also active in the Google Developer Group On Campus, contributing to the Creative Media division. My work includes social media management, content creation, and digital engagement strategy, with a focus on Instagram growth and engagement analytics.

I aim to use my skills to help organizations make data driven decisions and enhance their digital presence.`}
          delay={150}
          animateBy="words"
          direction="top"
          className="text-white/80 text-justify"
        />
      </section>

      {/* EXPERIENCE */}
<section className="mt-24" id="experience" data-aos="fade-up">

  {/* HEADER */}
  <div className="mb-8">
    <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-2">
      My Journey
    </p>

    <h2 className="text-3xl font-bold text-white">
      Experience
    </h2>

    <p className="text-white/60 mt-2">
      My experiences in technology, design, organization, and education.
    </p>
  </div>


  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-6">

    {listExperience.map((experience, index) => (

      <div
        key={experience.id}
        onClick={() => setSelectedExperience(experience)}
        data-aos="fade-up"
        data-aos-delay={index * 150}
        className="
          group cursor-pointer overflow-hidden
          rounded-2xl
          bg-zinc-900/80
          backdrop-blur-xl
          border border-violet-500/30
          transition-all duration-500
          hover:-translate-y-2
          hover:border-violet-400/70
          hover:shadow-[0_15px_50px_rgba(139,92,246,0.25)]
        "
      >

        {/* IMAGE */}
        <div className="relative aspect-[16/9] overflow-hidden">

          <img
            src={experience.image}
            alt={experience.title}
            className="
              w-full h-full
              object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* IMAGE OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
            "
          />

          {/* CATEGORY */}
          <span
            className="
              absolute top-4 left-4
              text-xs
              px-3 py-1
              rounded-full
              bg-black/50
              backdrop-blur-md
              border border-white/10
              text-white/80
            "
          >
            {experience.type}
          </span>

          {/* YEAR */}
          <span
            className="
              absolute bottom-4 right-4
              text-sm
              text-white/80
            "
          >
            {experience.year}
          </span>

        </div>


        {/* CONTENT */}
        <div className="p-6">

          <h3
            className="
              text-xl font-bold
              text-white
              group-hover:text-violet-300
              transition-colors duration-300
            "
          >
            {experience.title}
          </h3>

          <p className="mt-2 text-violet-300 font-medium">
            {experience.role}
          </p>

          <p className="mt-4 text-sm text-white/50 leading-relaxed line-clamp-3">
            {experience.description}
          </p>

          {/* VIEW DETAILS */}
          <div
            className="
              mt-5
              flex items-center gap-2
              text-sm text-violet-400
              group-hover:text-violet-300
            "
          >
            <span>View Details</span>

            <span
              className="
                group-hover:translate-x-2
                transition-transform duration-300
              "
            >
              →
            </span>
          </div>

        </div>

      </div>

    ))}

  </div>

</section>

      {/* TOOLS */}
<section className="mt-24" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-8 text-white">
    Tools & Technologies
  </h2>

  <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
    {listTools.map((tool, index) => (
      <div
        key={tool.id}
        data-aos="fade-up"
        data-aos-delay={index * 100}
        className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/80 backdrop-blur border border-violet-500/30 hover:border-pink-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-1"
      >
        {/* ICON */}
        <img
          src={tool.gambar}
          className="w-14 h-14 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-700 transition"
        />

        {/* TEXT */}
        <div>
          <p className="font-semibold text-white group-hover:text-pink-400 transition">
            {tool.nama}
          </p>
          <p className="text-sm text-white/60">
            {tool.ket}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* PROJECT */}
      <section className="mt-24" id="project" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-white">Project</h2>
        <ChromaGrid
          items={listProyek}
          onItemClick={handleProjectClick}
          radius={500}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </section>

      {/* CONTACT */}
      <section className="mt-24" id="contact" data-aos="fade-up">
        <Contact />
      </section>
        </main>

    {/* EXPERIENCE MODAL */}
    {selectedExperience && ( 
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 py-8"
        onClick={() => setSelectedExperience(null)}
      > 
      
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-900 border border-violet-500/30 shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
        > 
      
          {/* CLOSE BUTTON */}
          <button 
            onClick={() => setSelectedExperience(null)} 
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition"
          > 
            ✕ 
          </button> 

          {/* LARGE IMAGE */}
          <div className="w-full aspect-[16/9] overflow-hidden"> 
            <img 
              src={selectedExperience.image} 
              alt={selectedExperience.title} 
              className="w-full h-full object-cover" 
            /> 
          </div> 

          {/* MODAL CONTENT */}
          <div className="p-7 md:p-8"> 
      
            <div className="flex items-center gap-3 mb-4"> 
              <span className="text-xs px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300">
                {selectedExperience.type}
              </span> 

              <span className="text-sm text-white/40">
                {selectedExperience.year}
              </span> 
            </div> 

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {selectedExperience.title}
            </h3> 

            <p className="mt-2 text-violet-300 font-medium">
              {selectedExperience.role}
            </p> 

            <div className="h-px bg-white/10 my-6" /> 

            <p className="text-white/70 leading-relaxed">
              {selectedExperience.description}
            </p> 

            <button 
              onClick={() => setSelectedExperience(null)} 
              className="mt-7 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition"
            > 
              Close
            </button> 

          </div> 
        </div> 
      </div>
    )}

    {/* PROJECT MODAL */}
    <ProjectModal 
      isOpen={!!selectedProject} 
      onClose={handleCloseModal} 
      project={selectedProject} 
    />

  </>
);
}

export default App;