import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-50 transition-all duration-500 backdrop-blur-md bg-[#0f172a] pt-4 pb-3">
      {/* menu  */}
      <div className="hidden xl:flex flex-col justify-center items-center w-8 h-8 cursor-pointer top-7 left-4 absolute">
        {/* MenuBar */}
      </div>

      {/* Navbar */}
      <div className="max-w-[1420px] m-auto undefined">
        <div className="flex items-center justify-between">
          <div className=" text-4xl text-accent font-extrabold ">
            JOBAYER<span className="text-red-700">.</span>
          </div>
          <div className="hidden md:flex border border-cyan-500/60 py-3 px-10 rounded-[25px] shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <ul className="flex justify-center items-center gap-x-10">
              <a className="cursor-pointer active">
                <li className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2">
                  Home{" "}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </li>
              </a>
              <a className="cursor-pointer active">
                <li className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2">
                  About{" "}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </li>
              </a>
              <a className="cursor-pointer active">
                <li className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2">
                  Services{" "}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </li>
              </a>
              <a className="cursor-pointer active">
                <li className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2">
                  Skills{" "}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </li>
              </a>
              <a className="cursor-pointer active">
                <li className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2">
                  Education{" "}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </li>
              </a>
              <a className="cursor-pointer active">
                <li className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2">
                  Projects{" "}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </li>
              </a>
            </ul>
          </div>
          <div className="hidden md:flex items-center bg-white/95 rounded-full px-3 py-1 w-[220px] border border-cyan-400 focus-within:shadow-[0_0_15px_#22d3ee] transition-all">
            <input
              className="ml-2 w-full bg-transparent outline-none text-sm text-gray-700"
              type="text"
              placeholder="Search..."
            />
          </div>
          {/* <div className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative md:hidden">
            <span className="block h-[3px] w-7 bg-linear-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 "></span>
            <span className="block h-[3px] w-7 bg-linear-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 "></span>
            <span className="block h-[3px] w-7 bg-linear-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 "></span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
