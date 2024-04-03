
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress} =useScroll({
    target:ref,
    offset:["0.4 1", "1 1"]
  
  }); 
  return (


    <div >
      <motion.section 
      ref={ref}

  
       style={{
        opacity: scrollYProgress,
        scale: scrollYProgress,
        transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
       }}
      
      className='  rounded-xl'
      >
      <div className=" shadow-md py-6 rounded-md gap-2  grid justify-center  text-center">
        <div className="mx-auto  mb-6 grid h-14 w-14 place-items-center rounded-full bg-gray-600 p-2.5 text-white shadow">
          <Icon className="h-8 w-8" strokeWidth={2} />
        </div>
        <h5  className="mb-2 text-blue-600 font-bold">
          {title}
        </h5>
        <div className="px-8 font-normal text-justify font-sans !text-gray-700">
          {children}
        </div>
      </div>
      </motion.section>
    </div>
  );
}

export default SkillCard;
