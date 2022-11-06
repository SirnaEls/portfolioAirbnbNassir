import { MdDesignServices } from "react-icons/md";
import {
  FaReact,
  FaVuejs,
  FaSymfony,
  FaBootstrap,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaSwift,
  FaFigma,
} from "react-icons/fa";
import { IoDesktopSharp, IoColorPaletteSharp } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";

export const locationsTab = [
  { id: 1, label: "Développement Web", icon: <IoDesktopSharp size={24} /> },
  { id: 2, label: "Développement Mobile", icon: <CiMobile3 size={24} /> },
  { id: 3, label: "ReactJS", icon: <FaReact size={24} /> },
  { id: 4, label: "VueJS", icon: <FaVuejs size={24} /> },
  { id: 5, label: "Symfony", icon: <FaSymfony size={24} /> },
  { id: 6, label: "JavaScript ", icon: <SiJavascript size={24} /> },
  { id: 7, label: "HTML5", icon: <SiHtml5 size={24} /> },
  { id: 8, label: "CSS3", icon: <SiCss3 size={24} /> },
  { id: 9, label: "TailwindCSS", icon: <SiTailwindcss size={24} /> },
  { id: 10, label: "Bootstrap", icon: <FaBootstrap size={24} /> },
  { id: 11, label: "GitHub", icon: <FaGithub size={24} /> },
  { id: 12, label: "Terminal", icon: <BsFillTerminalFill size={24} /> },
  {
    id: 13,
    label: "Visual Studio Code",
    icon: <SiVisualstudiocode size={24} />,
  },
  { id: 14, label: "Docker", icon: <FaDocker size={24} /> },
  { id: 15, label: "Base de données", icon: <FaDatabase size={24} /> },
  { id: 16, label: "Swift", icon: <FaSwift size={24} /> },
  { id: 17, label: "MacOS", icon: <SiMacos size={24} /> },
  { id: 18, label: "Figma", icon: <FaFigma size={24} /> },
  { id: 19, label: "UX Design", icon: <MdDesignServices size={24} /> },
  { id: 20, label: "UI Design", icon: <IoColorPaletteSharp size={24} /> },
];

export const locations = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: "/amyaz1.png",
      },
      {
        id: 2,
        url: "/amyaz2.png",
      },

    ],
    location: "Amyaz",
    days: "Oct 2022",
    price: "Php | Bootstrap | BDD",
    isNew: true,
    rating: 4.2,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: "/altercv1.png"
      },
      {
        id: 2,
        url: "/altercv2.png",
      },
      {
        id: 3,
        url: "/altercv3.png",
      },
      
    ],
    location: "AlterCV",
    days: "Sep 2022",
    price: "ReactJS | TailwindCSS",
    isNew: false,
    rating: 4.0,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: "/snap1.png",
      },
      {
        id: 2,
        url: "/snap2.png",
      },
      {
        id: 3,
        url: "/snap3.png",
      },
      
    ],
    location: "Snapchat-Memories",
    days: "Mai 2022",
    price: "HTML | CSS | JavaScript | API NodeJS",
    isNew: false,
    rating: 4.0,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: "/todolist1.png",
      },
      {
        id: 2,
        url: "/todolist2.png",
      },
      
    ],
    location: "TodoList",
    days: "Sep 13-18",
    price: "ReactJS | CSS3 | Figma ",
    isNew: false,
    rating: 4.2,
  },

  
];
