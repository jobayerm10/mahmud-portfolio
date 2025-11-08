import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center rounded-xl mx-28 px-5 py-3 mt-3 mb-20 ">
      {/* Left Links */}
      <div className=" text-4xl text-accent font-extrabold ">JOBAYER.</div>

      <div className="flex gap-x-15 text-accent font-bold">
        <a href="#profile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Logo */}

      {/* Right Links */}
      {/* <div className="flex gap-x-40 text-accent font-bold"></div> */}
    </div>
  );
};

export default Navbar;
