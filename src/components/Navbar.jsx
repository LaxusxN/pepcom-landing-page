import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        <Link to="/" className="text-2xl font-bold text-blue-700">
          EPCOM
        </Link>

        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-700">Inicio</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-700">Servicios</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-700">Contáctanos</Link>
              
          
        </div>
      </div>
    </nav>
  );
}
