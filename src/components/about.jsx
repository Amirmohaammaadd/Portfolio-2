// import aboutImg from "../assets/about.jpg";
import aboutImg from "../assets/11.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl text-slate-800 dark:text-slate-200">
        About
        <span className=" text-slate-800  dark:text-neutral-500"> Me</span>
      </h2>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex items-center justify-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <img src={aboutImg} alt="About-Img" className="rounded-2xl" />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex justify-center lg:justify-start text-slate-800 dark:text-slate-300"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
