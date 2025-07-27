"use client"

import { useState } from "react"
import { Code, X, Calendar, Users, Zap, ExternalLink } from "lucide-react"

const projectsData = [
   {
    title: "Second-hand IT Equipment",
    shortDescription: "A website for buying and selling second-hand IT equipment.",
fullDescription:
  "This project creates a platform for exchanging second-hand IT equipment to promote sustainability and reusability through user-to-user interactions. I designed the UI/UX using Figma, focusing on a clean and intuitive layout. I also developed the frontend with HTML and CSS, ensuring responsiveness and ease of use.",
    technologies: ["Figma", "HTML", "Tailwind CSS", "JavaScript", "Next.js" , "Supabase"],
    image: "/secondhand-it.png?height=200&width=300&text=Task+Manager",
    duration: "3 months",
    teamSize: "Team Project",
    status: "Completed",
    prototypeLink: "https://www.figma.com/proto/a5H753Sy32naDHeBCoGSMU/Design?node-id=40-2&p=f&t=XOxLX2XuJRVbN0LD-1&scaling=min-zoom&content-scaling=fixed&page-id=9%3A706&starting-point-node-id=40%3A2"
  },
  {
    title: "SunSeeker",
    shortDescription: "A simple weather app for real-time forecasts and local conditions.",
    fullDescription:
      "SunSeeker is a simple weather web app that displays real-time local weather updates through a clean, mobile-friendly interface. I built the frontend using HTML and Tailwind CSS, and connected it to a weather API to fetch and display live data. The focus was on clarity, responsiveness, and ease of use.",
    technologies: ["Figma", "HTML", "Tailwind CSS", "JavaScript", "Next.js"],
    image: "/sunseeker.png?height=200&width=300&text=E-Commerce",
    duration: "3 months",
    teamSize: "Team Project",
    status: "Completed",
    prototypeLink: "https://sun-seeker.vercel.app/"
  },
  {
    title: "Citizen Information Management System for Mae Chan Subdistrict Municipality",
    shortDescription: "Citizen data platform improving access to public info and services",
    fullDescription:
      "This project was developed to digitize citizen information management and improve communication between Mae Chan Municipality and the public, enabling easier access to services and announcements for all citizens. I was responsible for designing a user-friendly UX/UI tailored to local users and creating test cases to ensure the system functions accurately",
    technologies: ["Figma", "Freppe", "React" ,"Tailwind CSS", "Google sheets"],
    image: "/maechan.png?height=200&width=300&text=Weather+App",
    duration: "3 month",
    teamSize: "Team Project",
    status: "In Progress",
    prototypeLink: "https://www.figma.com/design/H1lq8kjDqUDmcp81VlRJTl/Maechan-Web?node-id=1-2&t=Fb7DO2xt6Kp9I9yf-1"
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)

  const openModal = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Code
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={32}
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {project.teamSize}
                  </div>
                </div>

                {/* View Prototype Button */}
                {project.prototypeLink && (
                  <a
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-green-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{selectedProject.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-green-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Project Type</p>
                    <p className="font-semibold">{selectedProject.teamSize}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-green-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-semibold">{selectedProject.status}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">About This Project</h4>
                <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.prototypeLink && (
                <div className="mt-4">
                  <a
                    href={selectedProject.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
