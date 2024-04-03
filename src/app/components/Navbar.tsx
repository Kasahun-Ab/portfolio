import React from "react";
import {motion} from 'framer-motion';
const NAV_MENU = [
  {
    name: "Home",
    href:''
  
  },
  {
    name: "My resume",
    href:''
  },
  {
    name: "About",
    href:''
   
  },
  {
    name: "Projects",
    href:''
   
  },
  {
    name: "Contact us",
    href:''
  },
 
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
     className=" flex items-center gap-2 font-medium text-gray-200 "
       >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => setOpen((cur) => !cur);

  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpen(false)
  //   );
  // }, []);

  return (
    <nav  className="  bg-[rgba(5,9,14,0.68)] sticky top-0 ">
      <div className=" backdrop-blur-2xl w-full">
      <div className="  container px-16  w-full   py-7 mx-auto  flex items-center justify-between">
        <p  className=" text-blue-400   text-2xl font-bold">
       Aqu  development
        </p>

       
        <ul className=" hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name  }) => (
            <NavItem key={name}>
             
              {name}
            </NavItem>
          ))}
        </ul>
      

        
      </div>
      </div>
     
   
    </nav>
  );
}

export default Navbar;
