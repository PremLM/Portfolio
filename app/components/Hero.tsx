"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Github, Facebook, Mail } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Engineering Student";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
            <img
              src="/me.jpg?height=128&width=128&text=Profile"
              alt="Patcharadon Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-green-600">Patcharadon</span>
          </h1>

          <div className="text-xl sm:text-2xl text-gray-600 mb-8 h-8">
            <span className="border-r-2 border-green-600 animate-pulse">
              {text}
            </span>
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            I’m a software engineering student who loves turning ideas into
            interactive, intuitive, and inclusive digital experiences.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/PremLM"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-green-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.facebook.com/patcharadon.khraisri/?locale=th_TH"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-green-600"
            >
              <Facebook size={24} />
            </a>
            <a
              href="mailto:patcharadonkhraisri04@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-green-600"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-green-600 hover:text-green-800 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
