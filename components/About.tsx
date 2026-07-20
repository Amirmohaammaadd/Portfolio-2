"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/constants";
import aboutImg from "@/assets/11.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl text-slate-800 dark:text-slate-200">
        About
        <span className="text-slate-800 dark:text-neutral-500"> Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={aboutImg}
            alt="About-Img"
            className="w-full h-auto rounded-2xl"
            height={300}
            width={400}
          />
        </motion.div>

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
  );
};

export default About;
