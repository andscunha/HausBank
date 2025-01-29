import React from 'react'
import { FaShieldAlt, FaClock, FaUserShield } from 'react-icons/fa';

const Pilares: React.FC = () => {
  return (
    <section >
      <div className="container mx-auto text-center py-10">
        <h2 className="text-3xl font-bold text-[var(--primaria)] mb-4">
            Nossos Pilares
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Container dos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <FaShieldAlt className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eficiência</h3>
            <p className="text-gray-600 text-sm">Redução de custos operacionais por meio da digitalização e automação de processos.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <FaClock className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Inovação</h3>
            <p className="text-gray-600 text-sm">Integração de tecnologia financeira e blockchain, oferecendo soluções modernas e eficientes.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <FaUserShield className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalização</h3>
            <p className="text-gray-600 text-sm">Produtos e serviços adaptados às necessidades específicas do mercado imobiliário.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Pilares