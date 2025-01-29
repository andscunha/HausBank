import React from 'react'

const Banner: React.FC = () => {
  return (
    <section
  className="bg-center mt-[80px] py-18 sm:px-6 lg:px-8 px-4 shadow-lg shadow-black/40"
  style={{ backgroundImage: "url('/secao-topo.png')" }}
>
  <div className="relative container mx-auto flex flex-col items-start">
    <h1 className="text-4xl md:text-2 md:text-align-center font-bold text-white mb-4 max-w-lg">
      MAIS <span className="text-[var(--secundaria)] font-bold">BANCO</span> POR M²
    </h1>
    <p className="text-white mb-6 max-w-lg font-light">
      HAUSBANK. É BANCO. É DIGITAL. É IMOBILIÁRIO
    </p>
    <button className="border-1 border-[var(--tecearia)] transition duration-300 hover:bg-[var(--secundaria)] hover:border-[var(--secundaria)] hover:text-[var(--primaria)] px-8 py-1 rounded-lg text-lg font-light text-white cursor-pointer">
      Abrir Conta
    </button>
  </div>
</section>

  )
}

export default Banner
