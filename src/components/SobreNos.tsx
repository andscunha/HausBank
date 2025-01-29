import React from 'react'

const SobreNos: React.FC = () => {
  return (
    <section className="relative w-full h-[640px] flex items-center bg-cover bg-center -mt-25 -z-5" style={{ backgroundImage: "url('/sobre-nos-img.png')" }}>
      <div className="max-w-4xl mx-30 text-white flex justify-start w-full">
        <div className="w-1/2 mt-60">
          <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg">
            O HausBank é um banco digital com foco em soluções financeiras inovadoras para o mercado imobiliário e de serviços financeiros personalizados. O banco oferece serviços tanto para pessoas físicas quanto jurídicas, destacando-se por seu modelo de negócios que integra tecnologia financeira e blockchain para atender às necessidades específicas de seus clientes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SobreNos
