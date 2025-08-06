function Contact() {


  return (
      <section className="py-12 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Mapa de Google */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
          <iframe
            title="Ubicación EPCOM"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1651977240044!2d-76.93746472770921!3d-12.032145641623064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c50015d2aa5f%3A0x81b9e4d0e1cb3a92!2sSunat%20Ate!5e0!3m2!1ses-419!2spe!4v1754333446760!5m2!1ses-419!2spe" 
            width="100%"
             
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[100%] border-0"
          ></iframe>
        </div>

        {/* Información de contacto */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Contáctanos</h2>
          <div className="mb-4">
            <p className="font-semibold">Patricia Cochachi Maldonado</p>
            <p className="text-gray-600">Contadora Pública Colegiada</p>
          </div>
          <div className="space-y-3 text-gray-700">
            <p>📞 <strong>990 135 826</strong></p>
            <p>📧 asesoria.epcom17@gmail.com</p>
            <p>📍 Av. Metropolitana Mz. A1 Lote 13B<br/> Urb. Ceres 2da Etapa – Ate (Costado de Sunat)</p>
            <p>Oficina N°4</p>
          </div>
          <a
            href="https://wa.link/2t3x6l"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            990135826
          </a>
        </div>
      </div>
    </section>
  );
};
 
  


export default Contact