"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      name: 'Ana Silva',
      role: 'CEO & Fundadora',
      bio: 'Com mais de 15 anos de experiência em tecnologia, Ana fundou a DataSynk com a visão de criar soluções inovadoras que realmente fazem a diferença para os clientes.',
      image: '/team-member-1.jpg'
    },
    {
      name: 'Carlos Mendes',
      role: 'CTO',
      bio: 'Especialista em arquitetura de software e novas tecnologias, Carlos lidera nossa equipe técnica garantindo a excelência em todos os projetos.',
      image: '/team-member-2.jpg'
    },
    {
      name: 'Juliana Costa',
      role: 'Líder de Projetos',
      bio: 'Com formação em gestão de projetos e desenvolvimento de software, Juliana coordena nossas equipes para garantir entregas de alta qualidade dentro dos prazos.',
      image: '/team-member-3.jpg'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sobre a DataSynk
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conheça nossa história, missão e os valores que nos guiam
            </motion.p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossa História</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                A DataSynk nasceu em 2018 a partir da visão de um grupo de desenvolvedores apaixonados por tecnologia que acreditavam que o desenvolvimento de software poderia ser feito de forma mais eficiente e com maior qualidade. Começamos como uma pequena consultoria especializada em React, atendendo startups locais que buscavam soluções web modernas e responsivas.
              </p>
              
              <p>
                Com o crescimento rápido e a demanda por soluções mais completas, expandimos nossa expertise para incluir React Native para desenvolvimento mobile, Next.js para aplicações web de alta performance, Electron para aplicações desktop e Kubernetes para orquestração de infraestrutura em nuvem. Esta combinação de tecnologias nos permitiu oferecer soluções completas e integradas para nossos clientes.
              </p>
              
              <p>
                Ao longo dos anos, construímos uma reputação sólida baseada na excelência técnica, compromisso com prazos e capacidade de transformar requisitos complexos em soluções elegantes e funcionais. Hoje, a DataSynk é reconhecida como uma referência em desenvolvimento de software no mercado brasileiro, atendendo desde startups inovadoras até grandes corporações em processo de transformação digital.
              </p>
              
              <p>
                Nossa equipe cresceu, mas mantemos o mesmo espírito colaborativo e a paixão por tecnologia que nos motivou desde o início. Continuamos investindo constantemente em capacitação e novas tecnologias, garantindo que possamos sempre oferecer as melhores soluções para os desafios dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Missão, Visão e Valores</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Nossa Missão</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Transformar ideias em soluções tecnológicas inovadoras que impulsionem o crescimento e o sucesso dos nossos clientes, através de um desenvolvimento de software de alta qualidade e focado em resultados.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Nossa Visão</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ser reconhecida como a principal referência em desenvolvimento de software no Brasil, conhecida pela excelência técnica, inovação constante e capacidade de entregar soluções que realmente fazem a diferença.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Nossos Valores</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Excelência técnica, inovação contínua, compromisso com resultados, transparência nas relações, trabalho em equipe e paixão por tecnologia são os valores fundamentais que guiam todas as nossas ações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossa Equipe</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
                    <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
