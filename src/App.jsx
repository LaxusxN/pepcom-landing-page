import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


function App() {


  return (
    <Router>
      <div className="bg-gray-100 flex flex-col min-h-screen">
      <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />    
          </Routes>
        </main>
        
      </div>
    </Router>
  )
}

export default App
