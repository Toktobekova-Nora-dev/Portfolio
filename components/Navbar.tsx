import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative"></div>
        <Link href="/" className="text-white text-[25px] font-semibold">
          Nora{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
            {" "}
            Toktobekova{" "}
          </span>
        </Link>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        <Link
          href="https://www.linkedin.com/in/%D0%BD%D1%83%D1%80%D0%B0%D0%B9%D1%8B%D0%BC-%D1%82%D0%BE%D0%BA%D1%82%D0%BE%D0%B1%D0%B5%D0%BA%D0%BA%D1%8B%D0%B7%D1%8B-b73007338/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:scale-110 transition-all duration-300 text-4xl"
        >
          <FaLinkedinIn />
        </Link>

        <Link
          href="https://github.com/Toktobekova-Nora-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  hover:text-white hover:scale-110 transition-all duration-300 text-4xl "
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
