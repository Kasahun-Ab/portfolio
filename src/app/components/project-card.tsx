import Image from "next/image";
import { motion } from 'framer-motion';
interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <div className="  " >
      <header className=" mt-0 mb-1  max-w-fit  mx-auto min-h-fit overflow-hidden shadow-lg" 
    
      >
      
     <motion.img  

          
            src={img}
            alt="Description of the image"
            initial={{ opacity:0.0,scale:0.4,}}
            animate={
              {
         
                opacity:1.0,scale:1,
              }
            }
            transition={{
              duration:1
            }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      </header>
      <div className=" pt-5 ">
        <a
          href="#" className="w-full h-5   px-4 font-bold  backdrop-blur[800px] text-gray-950 ">  {title}
        </a>
        <p className="mb-6  text-justify p-4 py-6 !text-gray-800">
          {desc}
        </p>
       
      </div>
      {/* <button className=" bg-black text-white rounded-full mx-auto top-6  absolute px-6 py-2 border  ">
          see details
        </button> */}
    </div>
  );
}

export default ProjectCard;
