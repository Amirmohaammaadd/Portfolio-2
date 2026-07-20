"use client";

import { useContext } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import Toggle from "./ThemeToggle";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="mb-10 flex items-center justify-between py-6 overflow-x-hidden md:px-20">
      <div className="flex flex-shrink-0 mb-1 items-center">
        <HiOutlineComputerDesktop
          size={30}
          className="mx-2 w-10 text-slate-800 dark:text-slate-200 cursor-pointer "
        />
        <div className="ml-3">
          <Toggle selected={theme} setSelected={setTheme} />
        </div>
      </div>

      <div className="m-8 items-center justify-center gap-8 text-2xl hidden md:flex">
        <FaGithub className="text-slate-800 hover:scale-110 transition duration-100 dark:text-slate-200 dark:hover:text-cyan-500" />
        <FaInstagram className="text-slate-800 hover:scale-110 transition duration-100 dark:text-slate-200 dark:hover:text-cyan-500" />
        <FaSquareXTwitter className="text-slate-800 hover:scale-110 transition duration-100 dark:text-slate-200 dark:hover:text-cyan-500" />
        <FaLinkedinIn className="text-slate-800 hover:scale-110 transition duration-100 dark:text-slate-200 dark:hover:text-cyan-500" />
      </div>
    </nav>
  );
};

export default Navbar;
