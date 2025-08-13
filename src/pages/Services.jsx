import { Briefcase, FileText, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet"; // Importa Helmet para gestionar el SEO
import { Link } from "react-router-dom";

const servicios = [
  "Outsourcing contable",
  "Constitución de empresas en Lima", // Añadimos la ubicación
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
      {/* Helmet para SEO de la página de Servicios */}
      <Helmet>
        <title>Servicios Contables y Asesoría Tributaria en Lima | EPCOM</title>
        <meta
          name="description"
          content="Conoce nuestros servicios de outsourcing contable, constitución de empresas, auditoría y más. Somos tu estudio contable de confianza en Lima."
        />
        <meta
          name="keywords"
          content="servicios contables Lima, outsourcing contable, constitución de empresas en Lima, auditoría tributaria, trámites SUNAT, EPCOM"
        />
      </Helmet>

      {/* Hero */}
      <section className="text-white py-16 text-center flex flex-col justify-end h-[90vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/serviciosmain.jfif')" }}>
        <div className="bg-black/50">
          <h1 className="text-4xl font-bold">Servicios Contables en Lima</h1>
          <p className="mt-4 text-lg">Confianza, experiencia y compromiso para tu empresa.</p>
          {/* Este texto es bueno, pero mejor reubicarlo como una descripción general del negocio, no solo en una sección */}
          {/* <p className="mt-4 text-lg">Asesoría contable en Santa Anita</p> */}
        </div>
      </section>

      {/* Servicios */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">
            Nuestro portafolio de servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-center mb-4 text-blue-700">
                  <CheckCircle className="mr-2" />
                  {/* Cada servicio ahora es un H3 para una estructura clara */}
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
