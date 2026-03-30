import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools18 from "/assets/tools/vite.png";



export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },

  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  
];

import Proyek1 from "/assets/proyek/projectbrainyquack.jpeg";
import Proyek2 from "/assets/proyek/project2.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "BrainyQuack",
    subtitle: "Interactive Quiz Application for Engaging Learning",
    fullDescription:"BrainyQuack is an interactive quiz application designed to support teaching and learning through features such as quiz creation, participation, scoring, and user history tracking. This study evaluates its functionality and usability using black-box testing and the System Usability Scale (SUS) with 30 participants. The results show that all core features function properly, while the SUS score indicates acceptable usability, with room for improvement in navigation, button comfort, and overall user experience.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://jurnal.kopusindo.com/index.php/jtpp/article/view/1473/1261",
    dad: "100",
  },

  {
    id: 2,
    image: Proyek2,
    title: "Laundry App",
    subtitle: "Efficient Laundry Tracking and Management App",
    fullDescription:"BThis laundry application is designed to streamline and manage laundry services efficiently. It allows users to handle customer orders, track laundry status, and monitor transactions in a structured way. Built with a focus on usability, the application helps improve operational efficiency and provides a better user experience for both service providers and customers.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rvcaakes/Laundry-app",
    dad: "100",
  },
  
];
