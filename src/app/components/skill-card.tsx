
import { motion } from 'framer-motion';

import { useScrollAnimation } from '../smothAnimation/smoothanimation';


interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  const shouldAnimate: boolean = useScrollAnimation(530); 
  
  return (


    <div >
      <motion.section 
     
     animate={{ opacity: shouldAnimate ? 1 : 0, y: shouldAnimate ? 0 : 20 }}
     transition={{ duration: 0.5 }}
  
     
      
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
