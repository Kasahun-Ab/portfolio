import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <div className="  bg-[rgb(44,44,44)] shadow-md    rounded-md   " >
      <header className=" mt-0 mb-1  max-w-fit  mx-auto min-h-fit" 
    
      >
      <Image
     src={img}
      alt="Picture of the author"
      width={400} 
      height={400} 
      blurDataURL="data:..." 
      placeholder="blur" // Optional blur-up while loading
    />
      </header>
      <div className=" pt-5 ">
        <a
          href="#" className="w-full h-5 bg-red-600   px-4 font-bold  backdrop-blur[800px] text-gray-200 ">  {title}
        </a>
        <p className="mb-6  text-justify p-4 py-6 !text-gray-300">
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
