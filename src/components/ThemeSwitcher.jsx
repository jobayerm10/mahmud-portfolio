import React from "react";

const ThemeSwitcher = () => {
  return (
    <div className="mt-5 flex justify-start">
      <button
        id="darkModeToggle"
        class="relative mx-32 w-16 h-8 bg-pink-800 rounded-2xl flex items-center p-1 cursor-pointer"
      >
        <span class="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"></span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
