"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import Lightbox from "./Lightbox";

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-slate-800 dark:text-slate-300"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            className="mb-8 flex gap-10 flex-wrap lg:justify-center"
            key={index}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <Image
                src={project.image}
                alt={project.title}
                onClick={() => setSelected(index)}
                className="mb-6 h-[200px] w-auto cursor-zoom-in rounded object-fill"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-slate-900 dark:text-slate-300">
                {project.title}
              </h6>
              <p className="mb-4 text-slate-900 dark:text-neutral-400">
                {project.description}
              </p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded bg-slate-200 dark:bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <Lightbox
          src={PROJECTS[selected].image}
          alt={PROJECTS[selected].title}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default Projects;
