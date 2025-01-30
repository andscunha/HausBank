import React, { useState, useEffect } from 'react';
import assets from '../assets/logo-svg.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efeito para bloquear a rolagem da página quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Bloqueia a rolagem
    } else {
      document.body.style.overflow = 'auto'; // Restaura a rolagem
    }

    // Limpa o efeito ao desmontar o componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 bg-transparent">
        {/* Logo */}
        <div className="w-1/4 flex-shrink-0">
          <img src={assets} alt="Logo" className="w-12 h-12" />
        </div>

        {/* Menu central (visível apenas em desktop) */}
        <div className="hidden md:flex w-1/2 justify-center">
          <ul className="flex space-x-8">
            <li>
              <a href="#Header" className="cursor-pointer hover:text-gray-400">
                Produtos
              </a>
            </li>
            <li>
              <a href="#Header" className="cursor-pointer hover:text-gray-400">
                Nossos Pilares
              </a>
            </li>
            <li>
              <a href="#Header" className="cursor-pointer hover:text-gray-400">
                Sobre Nós
              </a>
            </li>
          </ul>
        </div>

        {/* "Entrar" + Botão (visível apenas em desktop) */}
        <div className="hidden md:flex w-1/4 items-center justify-end space-x-4">
          <a className="cursor-pointer hover:text-gray-400">Entrar</a>
          <button className="bg-[var(--primaria)] text-white px-4 py-1.5 rounded-lg cursor-pointer">
            Abrir Conta
          </button>
        </div>

        {/* Botão do menu hamburguer (visível apenas em mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center p-2 text-black focus:outline-none"
        >
          <span className="mr-2">Menu</span>
          <span
            id="hamburguer"
            className={`block w-5 relative transition-transform ${
              isMenuOpen ? 'transform rotate-180' : ''
            }`}
          >
            {/* Linha superior */}
            <span
              className={`block w-5 h-0.5 bg-black mb-1 transition-transform ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            {/* Linha do meio */}
            <span
              className={`block w-5 h-0.5 bg-black mb-1 transition-opacity ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            {/* Linha inferior */}
            <span
              className={`block w-5 h-0.5 bg-black transition-transform ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </span>
        </button>
      </div>

      {/* Menu mobile (visível apenas em mobile) */}
      <div
        className={`md:hidden fixed top-20 right-0 w-full bg-gray-100 transition-all duration-600 ease-in-out ${
          isMenuOpen ? 'h-[calc(100vh-4rem)] visible overflow-y-auto' : 'h-0 invisible overflow-y-hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <a href="#Header" className="block p-2 border-b border-gray-200 text-black">
              Produtos
            </a>
          </li>
          <li>
            <a href="#Header" className="block p-2 border-b border-gray-200 text-black">
              Nossos Pilares
            </a>
          </li>
          <li>
            <a href="#Header" className="block p-2 border-b border-gray-200 text-black">
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#Header" className="block p-2 border-b border-gray-200 text-black">
              Entrar
            </a>
          </li>
          <li>
            <button className="w-full bg-[var(--primaria)] text-white px-4 py-2 rounded-lg cursor-pointer">
              Abrir Conta
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;