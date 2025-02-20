import fullStackImg from "@/public/fullstackApp.png";
import ski from "@/public/ski.png";
import cityImg from "@/public/city.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import workoutRecorder from "@/public/workoutRecord.png";
import familyAppImage from "@/public/familyAppImage.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "NSCC Web Development Program",
    location: "Halifax, NS",
    description:
      "Joined NSCC in September 2023 to study full-stack web development. Gaining hands-on experience with technologies like React, Node.js, and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2023",
  },
  {
    title: "InternShip",
    location: "CYTS Investment Holding Ltd. , Shenzhen, China",
    description:
      "Participated in a web development internship in June 2024, working on WeChat mini-programs, and web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - September 2024",
  },
  {
    title: "Expected Graduation",
    location: "Halifax, NS",
    description:
      "I will graduate from NSCC's Web Development program in May 2025, ready to take on full-time software development opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2025",
  },
] as const;

export const projectsData = [
 
  {
    title: "Martock'site Redesign",
    description:
      "Redesigned the home and learning subpages for Martock'site. Implemented responsive design and improved navigation to enhance user experience",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    projectUrl: "https://skisite-mockup.vercel.app/",
    imageUrl: ski,
  },
  
  {
    title: "Workout Tracker",
    description:
      "A public web application designed to track and manage workouts. Users can log, search, and update their workout details seamlessly.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "Vercel"],
    projectUrl: "https://workout-recorder-app.vercel.app/",
    imageUrl: workoutRecorder,
  },
  {
    title: "Family connect App",
    description:
      "A family connect web application that enables parents to manage events, share posts, and upload photos. ",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "Cloudinary", "Vercel"],
    projectUrl: "https://fam-connect.vercel.app/",
    imageUrl: familyAppImage,  
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;