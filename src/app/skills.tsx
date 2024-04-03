"use client";
import { motion } from 'framer-motion';

import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,

} from "@heroicons/react/24/solid";
import SkillCard from "./components/skill-card";
import { useScrollAnimation } from './smothAnimation/smoothanimation';


const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
  // {
  //   icon: HashtagIcon,
  //   title: " Web Optimization",
  //   children:
  //     "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  // },
  // {
  //   icon: EyeIcon,
  //   title: "User-Centric Design",
  //   children:
  //     "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  // },
  // {
  //   icon: DocumentTextIcon,
  //   title: "Testing and Quality Assurance",
  //   children:
  //     "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  // },
];

export function Skills() {
  // window.addEventListener('scroll', () => {
  //   const yOffset = window.scrollY;
  //   console.log('Scrolling Y offset:', yOffset);
  // });
  const shouldAnimate: boolean = useScrollAnimation(300); 
  return (
    <motion.div
    animate={{ opacity: shouldAnimate ? 1 : 0, y: shouldAnimate ? 0 : 20 }}
     transition={{ duration: 0.5 }}
    >
    <section className=" py-28 ">
      <div className="container px-16 mx-auto mb-20  text-black text-center">
        <div className=" font-serif text-center text-2xl md:text-3xl lg:text-4xl text-gray-800  mb-2 font-bold uppercase">
          my skills
        
        </div>
        <div className=" flex flex-col">
        
        <div
        
          className="mx-auto text-justify w-full py-5 lg:py-8 md:py-2  black lg:w-1/2   tracking-widest leading-7   text-base"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </div>
        </div>
      </div>
      <div className="container mx-auto px-16 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
     <SkillCard key={idx} {...props}/>
        ))}
      </div>
    </section>
    </motion.div>
  );
}

export default Skills;
