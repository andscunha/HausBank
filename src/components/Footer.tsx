import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col relative"> {/* Adicione relative aqui */}
      <footer className="bg-white text-[var(--primaria)] py-12">
        {/* Imagem de fundo no lado direito */}
        <div
          className="absolute right-0 top-0 h-full w-36 bg-cover bg-center"
          style={{ backgroundImage: "url('/icon-footer.png')", zIndex: 1, right: '5%' }}
        ></div>

        <div className="max-w-4xl mx-auto px-6 flex justify-center gap-20 relative z-10"> {/* Adicione relative e z-10 aqui */}
          {/* Seção Páginas */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Páginas</h3>
            <ul className="space-y-2 text-left">
              <li>Projetos</li>
              <li>Sobre</li>
              <li>Comunidades</li>
            </ul>
          </div>

          {/* Seção Endereço */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Endereço</h3>
            <ul className="space-y-2 text-left">
              {/* Primeiro item com ícone ao lado */}
              <li className="flex items-center space-x-2 w-60">
                <FaMapMarkerAlt className="text-3xl relative top-[-25px]" />
                <span>Avenida João Cabral de Mello Neto, 610, bloco 03, Barra da Tijuca, RJ</span>
              </li>
              {/* Outros itens alinhados à direita */}
              <li>CEP: 22775-057</li>
              <li>CNPJ: 57.362.914/0001-10</li>
            </ul>
          </div>

          {/* Seção Redes Sociais */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaLinkedin className="text-2xl" />
            </div>
            <div className="flex flex-col items-start mt-6">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-2xl" />
                <span>contato@hausbank.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Retângulo de direitos reservados */}
      <div className="bg-[var(--secundaria)] text-center py-2 relative z-10"> {/* Adicione relative e z-10 aqui */}
        <p className="text-sm text-[var(--primaria)]">© 2025 - Haus Bank | Todos os direitos reservados. | Política de Privacidade</p>
      </div>
    </div>
  );
};

export default Footer;