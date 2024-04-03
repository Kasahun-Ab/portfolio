"use client";
import { motion } from 'framer-motion';
// import Image from "next/image";


function Hero() {
  return (
    <div className="  bg-cover -z-20 bg-[url('/images/herobackground.jpg')] ">
    <nav className=" bg-center example    flex items-center justify-center lg:pt-0' ">
     <div className="container  px-16   mx-auto grid py-36 gap-10  w-full grid-cols-1 items-center lg:grid-cols-2">
        <motion.div 
        initial={{ opacity: 0,x:-150 }}
        animate={{opacity: 1, x:0 }} 
        transition={{
          duration:1
        }}
        >
        
        <div className="row-start-2 z-10 lg:row-auto">
          <p 
            className=" bg-gradient-to-br    from-blue-500 to-blue-300 text-transparent bg-clip-text mb-4 lg:text-5xl  text-gray-100 !leading-tight text-3xl"
          >
          Hay I&apos;m  Web  and  <br /> Mobile App Developer!
          </p>
          <p className="mb-4 tracking-wider py-10 space-y-11 font-serif wo mx-8 !text-gray-200 md:pr-16 xl:pr-28"
          >
            i&apos;m kasahun ybeltal, a passionate web and mobile app developer based in Ethiopia.
             Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
            <motion.button 
            whileHover={{
              scale:"1.01"
            }}
           
            className="bg-gradient-to-r  from-blue-500  to-blue-400 mx-10  py-3 px-12 rounded-full  text-white ">
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
