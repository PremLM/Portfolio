import { Code } from "lucide-react"

const skillsData = [
  { name: "UX/UI Design", image: "figma" },
  { name: "Github", image: "github" },
  { name: "VS Code", image: "vscode" },
  { name: "HTML", image: "html" },
  { name: "TailwindCSS", image: "tailwind" },
  { name: "CSS", image: "css" },
  { name: "JavaScript", image: "javascript" },
  { name: "Next.js", image: "nextjs" },
  { name: "React", image: "react" },
  { name: "Python", image: "python" },
  { name: "Robot Framework", image: "/robot-framework.png?height=40&width=40&text=Robot+Framework", isLocal: true },
  { name: "Post man", image: "postman" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code className="text-green-600 mr-3" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl group cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-green-600 transition-colors duration-300">
                  <img
                    src={
                      skill.isLocal
                        ? skill.image
                        : `https://skillicons.dev/icons?i=${skill.image}`
                    }
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-white font-medium text-sm leading-tight">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
