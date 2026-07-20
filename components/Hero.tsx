import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { HERO_CONTENT } from "@/constants";
import profile from "@/assets/amir.jpg";

const container = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center items-center gap-20">
        <div className="flex flex-col items-center lg:items-star">
          <motion.h1
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-black dark:text-slate-200"
            variants={container(0)}
            initial="hidden"
            animate="visible"
          >
            Amir Abdolahi
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Front-end Developer
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tight text-black dark:text-slate-300"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            className="rounded-lg shadow-lg drop-shadow-xl brightness-75"
            src={profile}
            alt="Profile"
            width={400}
            height={500}
            sizes="400px"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
