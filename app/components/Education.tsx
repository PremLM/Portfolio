import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Engineering (Software Engineering)",
    school: "University of Phayao",
    location: "Phayao, Thailand",
    period: "2023 - 2026",
    gpa: "2.98/4.00",
  },
  {
    degree: "Science & Math",
    school: "The Prince Royal's College",
    location: "Chiangmai, Thailand",
    period: "2009 - 2022",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-green-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="text-green-600 mr-3" size={20} />
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                  </div>
                  <h4 className="text-md font-semibold text-green-600 mb-2">{edu.school}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-3 space-y-1 sm:space-y-0 sm:space-x-4 text-sm">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  {edu.gpa && (
                    <div className="text-gray-700 font-medium text-sm">GPA: {edu.gpa}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
