import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import { listTools, listProyek } from "./data";
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

    <main className="relative z-10 text-white">

    <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-black/40 to-black" />
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">

      <div className="hero grid md:grid-cols-2 items-center pt-10 gap-6">
        <div data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6 bg-zinc-900/80 backdrop-blur w-fit p-4 rounded-2xl border border-white/10">
            <img src="./assets/revaa.PNG" className="w-10 rounded-md" />
            <q className="text-white/80">Creative Tech & Data Enthusiast</q>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-white">
            <ShinyText text="Hi I'm Revanda Avrillita" speed={3} />
          </h1>

          <BlurText
            text="A data driven analyst and creative content strategist passionate about turning insights into engaging digital experiences."
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
            title="Data Analyst entusias"
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

    <ProjectModal
      isOpen={!!selectedProject}
      onClose={handleCloseModal}
      project={selectedProject}
    />
      </main>
  </>
);
}

export default App;