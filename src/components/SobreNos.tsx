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
    <section className="relative w-full h-[640px] flex items-center bg-cover bg-center -mt-25 -z-5" style={{ backgroundImage: "url('/sobre-nos-img.png')" }}>
      {/* Container principal */}
      <div className="container mx-auto px-4 h-full flex items-center">
        {/* Container do texto */}
        <motion.div 
  className="min-w-[440px] max-w-full text-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInLeft}
>
  <div>
    <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
    <p className="text-lg">
      O HausBank é um banco digital com foco em soluções financeiras inovadoras para o mercado imobiliário e de serviços financeiros personalizados. O banco oferece serviços tanto para pessoas físicas quanto jurídicas, destacando-se por seu modelo de negócios que integra tecnologia financeira e blockchain para atender às necessidades específicas de seus clientes.
    </p>
  </div>
</motion.div>

<motion.div 
  className="flex-1 flex justify-end items-end h-full"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInRight}
>
  <img
    src="/model.png"
    alt="Modelo segurando um cartão"
    className="h-auto min-w-[650px] relative"
    style={{ top: "-4px", right: "5px" }}
  />
</motion.div>


      </div>
    </section>
  );
};

export default SobreNos;