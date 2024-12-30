import fullStackImg from "@/public/fullstackApp.png";
import ski from "@/public/ski.png";
import cityImg from "@/public/city.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import workoutRecorder from "@/public/workoutRecord.png";

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
    title: "Basketball Fan Hub",
    description:
      "I worked as a full-stack developer on this project, creating an interactive platform for basketball enthusiasts to engage with the latest news, scores, and player stats.",
    tags: ["React", "Next.js", "MongoDB", "Express", "Bootstrap"],
    projectUrl: "https://w0458649-fullstack.onrender.com/",
    imageUrl: fullStackImg,
   
  },
  {
    title: "Martock'site Redesign",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    projectUrl: "https://kevin-zsc.github.io/web3100_final_project/",
    imageUrl: ski,
  },
  {
    title: "City's App",
    description:
      "A public web app for managing cities. It allows users to search, add, and modify city details. The app is built with PHP, styled using TailwindCSS, and uses a MySQL database for data storage.",
    tags: ["PHP", "MySQL", "TailwindCSS"],
    projectUrl: "https://w0458649-lab5.onrender.com",
    imageUrl: cityImg,
  },
  {
    title: "Workout Tracker",
    description:
      "A public web application designed to track and manage workouts. Users can log, search, and update their workout details seamlessly.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "Vercel"],
    projectUrl: "https://workout-recorder-app.vercel.app/",
    imageUrl: workoutRecorder,
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