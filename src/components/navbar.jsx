import logo from "../assets/kevinRushLogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Toggle from "./themeToggle";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 overflow-x-hidden">
      <div className="flex flex-shrink-0 mb-1 items-center">
        {/* <img
          src={logo}
          alt="None"
          className="mx-2 w-10 text-slate-800 dark:text-slate-200"
        /> */}
        <HiOutlineComputerDesktop
          size={30}
          className="mx-2 w-10 text-slate-800 dark:text-slate-200 cursor-pointer "
        />
        <div className="ml-3">
          <Toggle selected={theme} setSelected={setTheme} />
        </div>
      </div>

      <div className="m-8 flex items-center justify-center gap-8 text-2xl">
        <FaGithub className="text-slate-800 hover:scale-110 transition duration-100 dark:text-slate-200 dark:hover:text-cyan-500" />
        <FaInstagram className="text-slate-800 hover:scale-110 transition duration-100 dark:text-slate-200 dark:hover:text-cyan-500" />
        <FaSquareXTwitter className="text-slate-800 hover:scale-110 transition duration-100 dark:text-slate-200 dark:hover:text-cyan-500" />
        <FaLinkedinIn className="text-slate-800 hover:scale-110 transition duration-100 dark:text-slate-200 dark:hover:text-cyan-500" />
      </div>
    </nav>
  );
};

export default Navbar;
