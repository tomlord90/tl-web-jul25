export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <div className="nav-logo">
          <h2 className="text-white font-source font-bold italic uppercase text-shadow-lg text-6xl">Tom Lord</h2>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-gray-700 font-medium hover:text-yellow-400 transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="text-gray-700 font-medium hover:text-yellow-400 transition-colors duration-300">About</a></li>
          <li><a href="#skills" className="text-gray-700 font-medium hover:text-yellow-400 transition-colors duration-300">Skills</a></li>
          <li><a href="#projects" className="text-gray-700 font-medium hover:text-yellow-400 transition-colors duration-300">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 font-medium hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
        </ul>
        <div className="md:hidden flex flex-col cursor-pointer hamburger">
          <span className="w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
        </div>
      </div>
    </nav>
  );
} 