import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Technology = () => {
  const icons = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [15, -15],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  const icons2 = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [-15, 15],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-slate-800 dark:text-slate-300">
        Technologies
      </h1>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        {/* -------------------------------- */}
        <motion.div
          variants={icons(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        {/* -------------------------------- */}

        <motion.div
          variants={icons2(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        {/* -------------------------------- */}

        <motion.div
          variants={icons(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4"
        >
          <RiNextjsFill className="text-7xl text-black dark:text-slate-100" />
        </motion.div>
        {/* -------------------------------- */}

        <motion.div
          variants={icons2(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-blue-600" />
        </motion.div>
        {/* -------------------------------- */}

        <motion.div
          variants={icons(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4"
        > 
          <SiAntdesign className="text-7xl text-red-600" />
        </motion.div>
        {/* -------------------------------- */}

        <motion.div
          variants={icons2(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-black dark:text-slate-100" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
