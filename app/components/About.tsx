"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-100 rounded-full opacity-30 -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a third-year Software Engineering student at the University of Phayao, seeking work experience in software testing. I enjoy working 
              with details and solving problems, and I hope my skills are suitable for this position in your company. Thank you.
            </p>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition relative overflow-hidden"
            >
              My Resume
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></span>
            </a>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { label: "Problem Solver", bg: "bg-green-100", text: "text-green-800" },
                { label: "Team Player", bg: "bg-emerald-100", text: "text-emerald-800" },
                { label: "Quick Learner", bg: "bg-teal-100", text: "text-teal-800" },
                { label: "Creative Thinker", bg: "bg-lime-100", text: "text-lime-800" },
              ].map(({ label, bg, text }) => (
                <span
                  key={label}
                  className={`${bg} ${text} rounded-full text-sm font-medium px-4 py-2 transition transform hover:scale-110 hover:shadow-md cursor-pointer`}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
              <img
                src="/aboutme.png?height=384&width=300&text=About+Me"
                alt="Alex Johnson"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-200 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
