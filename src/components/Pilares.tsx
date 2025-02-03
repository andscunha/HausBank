import React from 'react';
import { Eficiencia, Inovaçao, Personalizacao } from '../assets/icon';
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const fadeInTop = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const Pilares: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[var(--primaria)] mb-4">
          Nossos Pilares
        </h2>
      </div>

      {/* Container dos Cards */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Card 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center max-w-[300px] mx-auto">
              <Eficiencia className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[var(--primaria)]">Eficiência</h3>
              <p className="text-gray-600 text-sm">Redução de custos operacionais por meio da digitalização e automação de processos.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInTop}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center max-w-[300px] mx-auto">
              <Inovaçao className="text-green-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[var(--primaria)]">Inovação</h3>
              <p className="text-gray-600 text-sm">Integração de tecnologia financeira e blockchain, oferecendo soluções modernas e eficientes.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center max-w-[300px] mx-auto">
              <Personalizacao className="text-purple-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[var(--primaria)]">Personalização</h3>
              <p className="text-gray-600 text-sm">Produtos e serviços adaptados às necessidades específicas do mercado imobiliário.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pilares;