import React from 'react'
import assets from '../assets/logo-svg.svg'

const Navbar: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
    <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Logo */}
      <div className="w-1/4 flex-shrink-0">
        <img src={assets} alt="Logo" className="w-12 h-12" />
      </div>
  
      {/* Menu central */}
      <div className="w-1/2 flex justify-center">
        <ul className="flex space-x-8">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Produtos</a></li>
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Nossos Pilares</a></li>
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Sobre Nós</a></li>
        </ul>
      </div>
  
      {/* "Entrar" + Botão */}
      <div className="w-1/4 flex items-center justify-end space-x-4">
        <a className="cursor-pointer hover:text-gray-400">Entrar</a>
        <button className="md:block bg-[var(--primaria)] text-white px-4 py-1.5 rounded-lg cursor-pointer">
          Abrir Conta
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default Navbar
