import { Github, Facebook, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/PremLM"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.facebook.com/patcharadon.khraisri/?locale=th_TH"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-colors duration-200"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:patcharadonkhraisri04@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 mb-2">© {currentYear} Patcharadon Khraisri</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
