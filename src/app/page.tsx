
import Hero from "./hero";
import Navbar from "./components/Navbar";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Contactus from "./contactus";
import Contactquestion from "./contactquestion";
export default function Home() {
 return (
  <div className=" relative ">
    
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

