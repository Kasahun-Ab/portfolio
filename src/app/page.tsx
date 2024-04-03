import Image from "next/image";
import Head from 'next/head';
import Hero from "./hero";
import Navbar from "./components/Navbar";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Contactus from "./contactus";
import Contactquestion from "./contactquestion";
export default function Home() {
 return (
  <div className=" relative bg-[rgb(0,0,0,0.9)]">
    
              <Navbar/>
              <Hero/>
              <Skills/>
              <Projects/>
              <Resume/>
              <Contactquestion/>
              <Contactus/>

     </div>


     
    
   
    

  
  );
}

