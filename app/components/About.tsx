export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a third-year Software Engineering student at the University of Phayao, seeking work experience in software testing. I enjoy working 
              with details and solving problems, and I hope my skills are suitable for this position in your company. Thank you.
            </p>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
            >
              My Resume
            </a>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-lime-100 text-lime-800 rounded-full text-sm font-medium">
                Creative Thinker
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
              <img
                src="/about.png?height=384&width=300&text=About+Me"
                alt="Alex Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
