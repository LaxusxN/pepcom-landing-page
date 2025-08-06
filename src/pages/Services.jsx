import { Briefcase, FileText, CheckCircle } from "lucide-react";

const servicios = [
  "Outsourcing contable",
  "Constitución de empresas",
  "Envío de libros electrónicos y SIRE",
  "Elaboración y declaración de impuestos",
  "Trámites de la SUNAT",
  "Atención de notificaciones SUNAT",
  "Fiscalizaciones de SUNAT",
  "Auditoría tributaria y financiera",
  "Actualización contable",
  "Atención de notificaciones SUNAFIL",
  "Gestión de planilla y cálculo laborales"
];

function Services() {


  return (
      <div>
      {/* Hero */}
      <section className=" text-white py-16 text-center 
      flex flex-col justify-end  
      h-[90vh] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/serviciosmain.jfif')" }}>
       <div className="bg-black/50">
         <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
        <p className="mt-4 text-lg">Confianza, experiencia y compromiso para tu empresa</p>
        <p className="mt-4 text-lg">Asesoría contable en Santa Anita</p>
        </div>
        
      </section>

      {/* Servicios */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-center mb-4 text-blue-700">
                  <CheckCircle className="mr-2" />
                  <h3 className="text-xl font-semibold">{servicio}</h3>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10 bg-white">
        <a
          href="https://wa.link/2t3x6l"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition"
        >
          Contáctanos por WhatsApp
        </a>
      </section>
    </div>
 
  )
}

export default Services
