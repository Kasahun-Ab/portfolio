"use client";
import ProjectCard from "./components/project-card";

const PROJECTS = [
  {
    img: "/images/project/mobileproject.jpg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/images/project/mobileproject2.jpg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/images/project/mobilewhiteproject.png",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/images/project/preview.png",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  },
  {
    img: "/images/project/travelingproject.avif",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/images/project/mobileproject2.jpg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/images/project/webproject.jpg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/images/project/websiteprojectwhite.png",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  },
];

export function Projects() {
  return (
    <section className="py-16  ">
      <div className="container  px-16 mx-auto mb-20 text-center">
        <h2   className="mb-4 font-serif uppercase font-bold text-gray-300 text-2xl">
          My Projects
        </h2>
        <p
      
          className="mx-auto w-full px-4  font-sans !text-gray-300 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality!.
        </p>
      </div>
      <div className="container px-16 mx-auto grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
