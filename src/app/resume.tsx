"use client";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import ResumeItem from "./components/resumeitem";


const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Science in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  return (
    <section className="flex py-28 flex-col justify-between items-center">

      <h2  className=" text-black py-7 text-4xl font-poppins">
            My Resume
          </h2>
      <div className="container px-16 mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        
        <div className="col-span-1">
          
          <p className="mb-4 mt-3 w-9/12 font-normal !text-gray-900">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </p>
          <button
           
            color="gray"
            className="flex items-center gap-2"
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
        < ResumeItem key={idx} {...props}/> 
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
