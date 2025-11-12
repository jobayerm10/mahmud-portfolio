import { Typewriter } from "react-simple-typewriter";
import Image from "../assets/heroimg.png";
const Intro = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex items-center flex-col-reverse lg:flex-row lg:items-center justify-between gap-10">
        <div className="flex flex-col items-start text-left w-1/2">
          <h1 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[60px] font-bold font-fahim leading-tight mb-4">
            Hi I'm <span className="text-purple-600">JOBAYER MAHMUD</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-fahim mb-6 typewriter">
            <span className="">
              <Typewriter
                words={["Frontend Developer."]}
                loop={1}
                cursor={true}
                typeSpeed={100}
              />
            </span>{" "}
          </h2>

          <p className=" text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 font-munna">
            A Educator and a Tech enthusiast. I am always looking for new
            opportunities to learn and grow.💗
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
            <a
              href="mailto:jobayermahmud976@gmail.com"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 
    py-3 px-6 rounded-full font-fahim font-medium text-sm sm:text-base
    bg-white text-[#121212] border-2 border-[#141e34]
    transition-all duration-300
    hover:bg-[#141e34] 
    hover:text-white 
    hover:border-cyan-400 
    hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] undefined"
            >
              Contact Me
            </a>
            <a
              target="_blank"
              href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume/Jobayer-Mahmud-Resume.pdf"
              className=" flex items-center justify-center gap-2 
    py-3 px-6 rounded-full font-fahim font-medium text-sm sm:text-base
    bg-white text-[#121212] border-2 border-[#141e34]
    transition-all duration-300
    hover:bg-[#141e34] 
    hover:text-white 
    hover:border-cyan-400 
    hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] undefined"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div class="flex-1 flex justify-center items-center mt-8 lg:mt-0  ">
          <div className="relative group w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute -inset-2 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-indigo-500 animate-spin-slow"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_0_50px_rgba(124,58,237,0.6)] group-hover:scale-105 transition duration-500">
              <img
                className="w-full h-full object-cover object-[center_15%]"
                src={Image}
                alt="JOBAYER MAHMUD"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
