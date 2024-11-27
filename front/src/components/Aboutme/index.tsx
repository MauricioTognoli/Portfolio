import { Mail, Linkedin, Phone, Download, Github } from "lucide-react"
import profileImage from '../../../public/images/mauricio-tognoli.jpg'
import Image from "next/image"

export default function Aboutme() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-5xl bg-gray-800 text-white overflow-hidden rounded-3xl shadow-2xl">
        <div className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            <div className="p-8 lg:p-12 space-y-8 relative">
              <div className="absolute top-0 left-0 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative">
                <h1 className="text-4xl font-bold mb-2">Sobre Mi</h1>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-2xl font-light">Hola, soy <span className="font-semibold text-white">Mauricio Tognoli</span>.</p>
                <p className="text-lg">Soy un diseñador Front-end de Buenos Aires, Argentina, apasionado por crear experiencias digitales hermosas e intuitivas.</p>
                <p className="text-lg">Mi objetivo es desafiarme en nuevos entornos, aprendiendo y mejorando continuamente mis habilidades a través de diversos proyectos.</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Contacto</h2>
                <div className="space-y-2">
                  <a href="mailto:tognolimauricio@gmail.com" className="flex items-center space-x-3 group">
                    <div className="bg-gray-700 p-2 rounded-full group-hover:bg-purple-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-purple-400 transition-colors">tognolimauricio@gmail.com</span>
                  </a>
                  <a href="tel:+543487552390" className="flex items-center space-x-3 group">
                    <div className="bg-gray-700 p-2 rounded-full group-hover:bg-purple-600 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-purple-400 transition-colors">+54 3487 55 2390</span>
                  </a>
                  <a href="www.linkedin.com/in/mauricio-tognoli" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                    <div className="bg-gray-700 p-2 rounded-full group-hover:bg-purple-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-purple-400 transition-colors">linkedin.com/in/mauricio-tognoli</span>
                  </a>
                  <a href="https://github.com/MauricioTognoli" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                    <div className="bg-gray-700 p-2 rounded-full group-hover:bg-purple-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-purple-400 transition-colors">github.com/MauricioTognoli</span>
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Download className="w-4 inline h-4 mr-2 mb-1" />
                  <a href="./public/cv.pdf" download>Download CV</a>
                </button>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] lg:min-h-[600px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full scale-95 translate-x-4 translate-y-4 lg:scale-110 lg:translate-x-10 lg:-translate-y-10 transform rotate-3"></div>
              <Image
                src={profileImage || 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/No_image_%28male%29.svg/450px-No_image_%28male%29.svg.png'}
                alt="Profile"
                width={450}
                height={500}
                className="absolute inset-0 w-full h-full object-cover object-top rounded-full scale-90 hover:scale-95 transition-transform duration-300"
              />
              <div className="absolute bottom-12 left-12 bg-gray-900 bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300">
                <p className="text-xl font-semibold">Front-end Developer</p>
                <p className="text-blue-300">Junior</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}