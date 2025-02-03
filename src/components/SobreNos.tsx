import React from 'react';
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const SobreNos: React.FC = () => {
  return (
    <section id="sobre" 
      className="relative w-full h-[720px] md:h-[640px] flex items-center bg-cover bg-center mt-20 md:-mt-25 -z-5 bg-[url('/sobre-nos-mobile.png')] md:bg-[url('/sobre-nos-img.png')]"
    >
      {/* Container principal */}
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center py-10 md:py-0">
        {/* Container do texto */}
        <motion.div 
          className="w-full md:min-w-[460px] max-w-full text-white text-center md:text-left mt-2 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nós</h2>
            <p className="text-base md:text-lg">
              O HausBank é um banco digital com foco em soluções financeiras inovadoras para o mercado imobiliário e de serviços financeiros personalizados. O banco oferece serviços tanto para pessoas físicas quanto jurídicas, destacando-se por seu modelo de negócios que integra tecnologia financeira e blockchain para atender às necessidades específicas de seus clientes.
            </p>
          </div>
        </motion.div>

        {/* Container da imagem */}
        <motion.div 
          className="w-full md:flex-1 flex justify-center md:justify-end items-end h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <img
            src="/model.png"
            alt="Modelo segurando um cartão"
            className="h-auto w-full max-w-[400px] md:min-w-[650px] md:max-w-none relative top-10 md:-top-1"
            style={{ right: "20px" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SobreNos;