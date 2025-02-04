import React from 'react';

const Banner: React.FC = () => {
  return (
    <section
      className="bg-center mt-[80px] py-18 sm:px-6 lg:px-8 px-4 shadow-lg shadow-black/40"
      style={{ backgroundImage: "url('/secao-topo.png')" }}
    >
      <div className="relative container mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-4 max-w-lg">
          MAIS <span className="text-[var(--secundaria)] font-bold">BANCO</span> POR M²
        </h1>
        <p className="text-white mb-6 max-w-lg font-light">
          HAUSBANK. É BANCO. É DIGITAL. É IMOBILIÁRIO
        </p>
        <a href="https://conta.hausbank.com.br/select-onboarding" target="_blank" rel="noopener noreferrer">
        <button className="border-1 border-[var(--tecearia)] transition duration-300 hover:bg-[var(--secundaria)] hover:border-[var(--secundaria)] hover:text-[var(--primaria)] px-20 py-1.5 rounded-lg text-lg font-light text-white cursor-pointer md:px-12">
          Abrir Conta
        </button>
        </a>
      </div>
    </section>
  );
};

export default Banner;