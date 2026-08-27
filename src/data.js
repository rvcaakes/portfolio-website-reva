import HeroImage from "/assets/hero-img.webp";

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

const Image = {
  HeroImage,
};

export default Image;


// ==================== EXPERIENCE ====================

export const listExperience = [
  {
    id: 1,
    title: "Google Developer Group On Campus UNESA",
    role: "Creative Media Division",
    year: "2026",
    type: "Organization",
    image: "/assets/experience/gdg.jpeg",
    description:
      "Contributed to social media management, content creation, and digital engagement strategies, with a focus on Instagram growth and audience engagement.",
  },

  {
    id: 2,
    title: "Pusat Veteriner Farma (Pusvetma)",
    role: "UI/UX Designer & Web Developer",
    year: "2026",
    type: "Internship",
    image: "/assets/experience/pusvetma.jpeg",
    description:
      "Designed the UI/UX for the Pusvetma Internship Management System and contributed to designing and developing the Pusvetma website.",
  },

  {
    id: 3,
    title: "Novo Club — SDN Rangkah IV Surabaya",
    role: "Speaker / Facilitator",
    year: "2026",
    type: "Social Project",
    image: "/assets/experience/novo.jpeg",
    description:
      "Delivered an educational session about bullying to elementary school students, including discussions about its impact, prevention, and positive behavior.",
  },
];


// ==================== TOOLS ====================

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


// ==================== PROJECT ====================

export const listProyek = [
  {
    id: 1,
    image: "/assets/proyek/projectbrainyquack.jpeg",
    title: "BrainyQuack",
    subtitle: "Interactive Quiz Application for Engaging Learning",
    fullDescription:
      "BrainyQuack is an interactive quiz application designed to support teaching and learning through features such as quiz creation, participation, scoring, and user history tracking.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://jurnal.kopusindo.com/index.php/jtpp/article/view/1473/1261",
    dad: "100",
  },

  {
    id: 2,
    image: "/assets/proyek/project2.png",
    title: "Laundry App",
    subtitle: "Efficient Laundry Tracking and Management App",
    fullDescription:
      "This laundry application is designed to streamline and manage laundry services efficiently. It allows users to handle customer orders, track laundry status, and monitor transactions in a structured way.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rvcaakes/Laundry-app",
    dad: "200",
  },

  {
    id: 3,
    image: "/assets/proyek/bookin.jpeg",
    title: "BOOKIN",
    subtitle: "Sistem Informasi Perpustakaan Berbasis Web",
    fullDescription:
      "BOOKIN is a web-based library information system with three access roles: User, Admin, and Courier. Users can purchase books online and borrow books through the library system. Admins manage books, users, borrowing, and transactions, while Couriers handle the delivery process for book orders and loans.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/kuwphmi/perpus-ihmato.git",
    dad: "300",
  },
];