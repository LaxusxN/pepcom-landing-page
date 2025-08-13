import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import constitucionempresa from "../assets/constitucionempresa.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import sunat from "../assets/sunat.png";
import sunarp from "../assets/sunarp.png";
import mainimage from "../assets/mainimage.png";

const servicios = [
  {
    title: "Constitución de empresas",
    img: constitucionempresa,
    alt: "Constitución de empresas en Lima"
  },
  {
    title: "Declaración de impuestos",
    img: s2,
    alt: "Declaración de impuestos SUNAT"
  },
  {
    title: "Auditoría tributaria y financiera",
    img: s3,
    alt: "Auditoría tributaria y financiera para negocios"
  },
  {
    title: "Envío de libros electrónicos y SIRE",
    img: s4,
    alt: "Envío de libros electrónicos y SIRE en Perú"
  },
  {
    title: "Gestión de plantillas y cálculos laborales",
    img: s5,
    alt: "Gestión de planillas y cálculos laborales"
  },
  {
    title: "Copia literal",
    img: s6,
    alt: "Trámite de copia literal SUNARP"
  }
];

const tramites = [
  {
    img: sunat,
    alt: "Logo de la SUNAT",
    options: ["Inscripción RUC", "Clave SOL", "Devoluciones y fraccionamientos"]
  },
  {
    img: sunarp,
    alt: "Logo de la SUNARP",
    options: ["Copia literal", "Vigencia de poder", "Reserva de nombre", "Boleta informativa"]
  }
];

const Home = () => {
  return (
    <div>
      {/* Helmet solo para SEO */}
      <Helmet>
        <title>Estudio Contable en Lima | EPCOM</title>
        <meta
          name="description"
          content="Somos un estudio contable en Lima que brinda servicios de contabilidad, asesoría tributaria y laboral para empresas. ¡Confía en EPCOM para la gestión de tu negocio!"
        />
        <meta
          name="keywords"
          content="estudio contable en Lima, contabilidad, asesoría tributaria, servicios contables en Lima, EPCOM, contadores en Lima, asesoría laboral Lima"
        />
      </Helmet>
      <section
        className="w-full h-[70vh] bg-gray-50 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${mainimage})` }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center bg-black/50 text-[#ffffff] px-6 py-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* El H1 es el título más importante */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Estudio Contable en Lima
            </h1>
            <p className="text-4xl md:text-5xl font-bold leading-tight">
              EPCOM
            </p>
            <p className="mt-4 text-lg">
              Asesoría Contable Tributaria, Laboral y Financiera.
              <span className="block mt-1">¡Confianza y experiencia para tu negocio!</span>
            </p>
            {/* Botón WhatsApp */}
            <a
              href="https://wa.link/2t3x6l"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
            >
              990135826
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        {/* Usamos un H2 para el subtítulo de la sección */}
        <h2 className="flex justify-center mb-4 font-bold text-blue-600 text-2xl">
          Nuestros servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicios.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-8 h-[120px] cursor-pointer bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
            >
              <img src={service.img} alt={service.alt} />
              {/* Usamos un H3 para cada servicio */}
              <h3 className="font-semibold text-lg">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8">
        {/* Usamos un H2 para el subtítulo de la sección */}
        <h2 className="flex justify-center mb-4 font-bold text-blue-600 text-2xl">
          Trámites en línea
        </h2>
        <div className="flex justify-center gap-6">
          {tramites.map((tramite, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-8 h-auto w-[300px] bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
            >
              <img className="bg-amber-200" src={tramite.img} width={120} alt={tramite.alt} />
              <ul>
                {tramites.map((tramite, index) => (
                  <li key={index}>
                    {/* Reemplazamos <h1> por <h3> o <h4>, ya que no son títulos principales */}
                    <h4>{tramite.options[0]}</h4>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
