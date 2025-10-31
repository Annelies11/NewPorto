import card1 from "../assets/benefits/card-1.svg";
import card2 from "../assets/benefits/card-2.svg";
import card3 from "../assets/benefits/card-3.svg";
import card4 from "../assets/benefits/card-4.svg";
import card5 from "../assets/benefits/card-5.svg";
import card6 from "../assets/benefits/card-6.svg";
import {
  tailwind_color,
  vite_color,
  //three_color,
  raspi_color,
  tf_color,
  react_color,
  next_color,
  ardu_color,
  precip,
  new_ip,
  arduino,
  react,
  next,
  tensorflow,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  //discordBlack,
  linkedin,
  facebook,
  figma,
  // file02,
  //framer,
  // homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  // notion,
  // photoshop,
  // plusSquare,
  // protopie,
  // raindrop,
  recording01,
  recording03,
  // roadmap1,
  edu1,
  // roadmap2,
  // roadmap3,
  // roadmap4,
  // searchMd,
  //slack,
  sliders04,
  //telegram,
  //twitter,
  yourlogo,
  discordBlack,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Who am I",
    // url: "#features",
    url: "#hero",
  },
  // {
  //   id: "1",
  //   title: "Pricing",
  //   url: "#pricing",
  // },
  {
    id: "2",
    title: "Experience",
    url: "#experience",
    // url: "#hero",
  },
  {
    id: "3",
    title: "Projects",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

// export const heroIcons = [homeSmile, file02, searchMd, plusSquare]; //react,  next,  tensorflow,
export const heroIcons = [arduino, react, tensorflow, next];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Introduction to Scratch",
  "Demonstrate how to program robot",
  "Sharing experience about teaching robotics to children",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Universitas Nusantara PGRI Kediri",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "27 Oct 2025",
    status: "done",
    imageUrl: edu1,
    colorful: true,
  },
  // {
  //   id: "1",
  //   title: "Gamification",
  //   text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap2,
  // },
  // {
  //   id: "2",
  //   title: "Chatbot customization",
  //   text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  // },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];

export const robo = "Arduino, ESP32";

export const fe = "React JS";

export const fs = "Next JS";

export const collabContent = [
  {
    id: "0",
    title: "Robotics and Embedded System",
    text: robo,
  },
  {
    id: "1",
    title: "Frontend Developer",
    text: fe,
  },
  {
    id: "2",
    title: "Fullstack Developer",
    text: fs,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Arduino",
    icon: ardu_color,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "React",
    icon: react_color,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Next",
    icon: next_color,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Tensorflow",
    icon: tf_color,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Raspberry Pi",
    icon: raspi_color,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Figma",
    icon: figma,
    width: 30,
    height: 30,
  },
  {
    id: "6",
    title: "Vite JS",
    icon: vite_color,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Tailwin CSS",
    icon: tailwind_color,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Apple Clone Website",
    text: "Demonstrates a seamless integration of Three.js for WebGL-rendered 3D visuals, GSAP for performant timeline-based animations, and React for a component-driven UI.",
    backgroundUrl: card1,
    iconUrl: benefitIcon1,
    imageUrl: new_ip,
    path: "https://apple-clone-aris.netlify.app/",
  },
  {
    id: "1",
    title: "Smoke Absorber",
    text: "Using fuzzy control to make coconut shell charcoal production cleaner, smarter, and more efficient for the environment.",
    backgroundUrl: card2,
    iconUrl: benefitIcon2,
    imageUrl: precip,
    light: true,
    path: "https://www.youtube.com/watch?v=VvEdRiHsCE8",
  },
  {
    id: "2",
    title: "Movie Recomender",
    text: "A React-powered movie recommender that personalizes film suggestions based on your tastes, watching history, and ratings—fast, interactive, and easy to use.",
    backgroundUrl: card3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    path: "https://react-popcorn-pied.vercel.app/",
  },
  {
    id: "3",
    title: "Hotel Management",
    text: "The Wild Oasis is a sleek hotel management platform built with React Material for smooth, intuitive guest and booking control.",
    backgroundUrl: card4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    path: "https://under-maintenance-gules.vercel.app/",
  },
  {
    id: "4",
    title: "Small Business Controller",
    text: "An IoT dashboard for small home businesses like fish ponds and local stores, enabling smart monitoring and easy automation.",
    backgroundUrl: card5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    path: "https://under-maintenance-gules.vercel.app/",
  },
  {
    id: "5",
    title: "Smart Agriculture",
    text: "A smart IoT system for modern agriculture and greenhouses, providing real-time data, climate control, and efficient resource management.",
    backgroundUrl: card6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    path: "https://under-maintenance-gules.vercel.app/",
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/aris-mahmudi112233/",
  },
  {
    id: "1",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/channels/854229997804060692/1422764681709359154",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/aris_mahmvdi/",
  },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/aris.mahmud.16/",
  },
];
