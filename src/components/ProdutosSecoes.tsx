import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ProdutosSecoes: React.FC = () => {
  return (
    <section>

      {/* Título da Seção */}
      <div className="container mx-auto text-center py-20">
        <h2 className="text-3xl font-bold text-[var(--primaria)] mb-4">
          PRODUTOS
        </h2>
        <p className="text-[var(--primaria)] text-lg">
          SOLUÇÕES FINANCEIRAS INOVADORAS PARA O MERCADO IMOBILIÁRIO
        </p>
      </div>

      <div className="mx-auto text-center max-w-full px-0">

        {/* Seção 1 */}
        <div className="mb-20 flex flex-col md:flex-row md:items-stretch md:gap-12">
          {/* Imagem e Texto */}
          <div className="md:w-1/2 flex flex-col">
            <div className="relative p-0 m-0 overflow-hidden">
              <img src="/productsection1.png" alt="Produto 1" className="w-full h-full object-cover" />
              <div className="absolute top-1/2 left-4 md:left-8 lg:left-12 transform -translate-y-1/2 text-left text-white w-[60%] md:w-[85%] lg:w-[70%]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Conta Digital</h3>
                <p className="text-xs sm:text-sm md:text-base font-light">Contas digitais para pessoas físicas e jurídicas com uma ampla gama de serviços financeiros.</p>
              </div>
            </div>

            {/* Textos da Seção 1 */}
            <div className="px-4 mt-6 md:pl-8 lg:pl-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold">Abertura Rápida</h4>
                    <p className="text-sm text-gray-600">Crie sua conta digital em poucos minutos sem burocracia.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold">Cartão Virtual</h4>
                    <p className="text-sm text-gray-600">Tenha um cartão virtual para compras online com segurança.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem extra */}
          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src="/section1-model.png"
              alt="Imagem extra 1"
              className="w-3/4 rounded-lg shadow-lg md:w-full md:rounded-none md:shadow-none"
            />
          </div>
        </div>

        {/* Seção 2 */}
        <div className="mb-20 flex flex-col md:flex-row-reverse md:items-stretch md:gap-12">
          {/* Imagem e Texto */}
          <div className="md:w-1/2 flex flex-col">
            <div className="relative p-0 m-0 overflow-hidden">
              <img src="/productsection2.png" alt="Produto 2" className="w-full h-full object-cover" />
              <div className="absolute top-1/2 right-4 md:right-8 lg:right-12 transform -translate-y-1/2 text-right text-white w-[60%] md:w-[85%] lg:w-[70%]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Pagadoria</h3>
                <p className="text-xs sm:text-sm md:text-base font-light">Solução completa e automatizada para gestão de pagamentos recorrentes como comissões.</p>
              </div>
            </div>

            {/* Textos da Seção 2 */}
            <div className="px-4 mt-6 md:pr-8 lg:pr-12">
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start justify-end space-x-3">
                  <div className="text-right flex-1">
                    <h4 className="text-xl font-semibold">Automação Completa</h4>
                    <p className="text-sm text-gray-600">Gerencie pagamentos recorrentes de forma automatizada.</p>
                  </div>
                  <FaCheckCircle className="text-blue-500 text-xl flex-shrink-0" />
                </div>

                {/* Item 2 */}
                <div className="flex items-start justify-end space-x-3">
                  <div className="text-right flex-1">
                    <h4 className="text-xl font-semibold">Relatórios Detalhados</h4>
                    <p className="text-sm text-gray-600">Acompanhe todas as transações com relatórios personalizados.</p>
                  </div>
                  <FaCheckCircle className="text-blue-500 text-xl flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Imagem extra */}
          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src="/section2-model.png"
              alt="Imagem extra 2"
              className="w-3/4 rounded-lg shadow-lg md:w-full md:rounded-none md:shadow-none"
            />
          </div>
        </div>

        {/* Seção 3 */}
        <div className="mb-12 flex flex-col md:flex-row md:items-stretch md:gap-12">
          {/* Imagem e Texto */}
          <div className="md:w-1/2 flex flex-col">
            <div className="relative p-0 m-0 overflow-hidden">
              <img src="/productsection3.png" alt="Produto 3" className="w-full h-full object-cover" />
              <div className="absolute top-1/2 left-4 md:left-8 lg:left-12 transform -translate-y-1/2 text-left text-white w-[70%] md:w-[85%] lg:w-[70%]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Tokenização de Ativos</h3>
                <p className="text-xs sm:text-sm md:text-base font-light">Plataforma de tokenização de ativos imobiliários baseada em blockchain para investimentos fracionados.</p>
              </div>
            </div>

            {/* Textos da Seção 3 */}
            <div className="px-4 mt-6 md:pl-8 lg:pl-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-purple-500 text-xl" />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold">Investimentos Fracionados</h4>
                    <p className="text-sm text-gray-600">Acesse investimentos em ativos tokenizados de forma simples.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-purple-500 text-xl" />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold">Transparência com Blockchain</h4>
                    <p className="text-sm text-gray-600">Tenha segurança e transparência com tecnologia blockchain.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem extra */}
          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src="/section3-model.png"
              alt="Imagem extra 3"
              className="w-3/4 rounded-lg shadow-lg md:w-full md:rounded-none md:shadow-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProdutosSecoes;