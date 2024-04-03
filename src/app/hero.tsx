"use client";
import { motion } from 'framer-motion';
import Image from "next/image";


function Hero() {
  return (
    <div className="  bg-cover -z-20  ">
    <nav className=" bg-center example  bg-slate-50   flex items-center justify-center lg:pt-0' ">
     <div className="container  px-16   mx-auto grid  py-28 gap-10  w-full grid-cols-1 items-center lg:grid-cols-2">
        <motion.div 
        initial={{ opacity: 0,x:-150 }}
        animate={{opacity: 1, x:0 }} 
        transition={{
          duration:1
        }}
        >
        
        <div className="row-start-2 z-10 lg:row-auto">
        
          <p 
            className=" bg-gradient-to-br md:m-auto md:flex justify-between  bg-clip-text mb-2 lg:text-5xl  !leading-tight text-3xl font-extrabold"
          >
           Website And Mobile App Developer
          </p>

          <div className=' h-1 w-28 my-4 bg-black rounded-sm'></div>
          <p className="mb-2 tracking-widest leading-7  py-10  text-base"
          >
            I&apos;m kasahun ybeltal, a passionate web and mobile app developer based in Ethiopia.
             Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
           
            <motion.button 
            whileHover={{
              scale:"1.01"
            }}
           
            className="bg-gradient-to-r bg-black text-white  hover:bg-white hover:text-black hover:border-black border px-8   py-3  rounded   ">
                  Download Cv
                </motion.button>
        
        </div>
        </motion.div >

          <div className=" mx-auto">
          <motion.img   
            className='    '
            src="/image/photo.png"
            alt="Description of the image"
            initial={{ opacity:0.0,scale:0.4,x:150}}
            animate={
              {
         
                opacity:1.0,scale:1,x:0
              }
            }
            transition={{
              duration:1
            }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
          </div>
  
       </div>
    </nav>
    </div>

  );
}

export default Hero;
