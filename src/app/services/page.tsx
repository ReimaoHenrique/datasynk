"use client";

import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criamos aplicações web modernas, responsivas e de alta performance utilizando React e Next.js. Nossas soluções são desenvolvidas com foco na experiência do usuário, performance e escalabilidade.',
      icon: <FiMonitor className="w-12 h-12 text-blue-600" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Desenvolvimento Mobile',
      description: 'Desenvolvemos aplicativos móveis nativos e multiplataforma para iOS e Android utilizando React Native. Nossos aplicativos são otimizados para oferecer a melhor experiência possível em cada plataforma.',
      icon: <FiSmartphone className="w-12 h-12 text-blue-600" />,
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux']
    },
    {
      title: 'Aplicações Desktop',
      description: 'Criamos aplicações desktop multiplataforma com Electron, permitindo que você tenha um único código base para Windows, macOS e Linux, mantendo a experiência nativa em cada sistema operacional.',
      icon: <FiServer className="w-12 h-12 text-blue-600" />,
      technologies: ['Electron', 'React', 'TypeScript', 'Node.js']
    },
    {
      title: 'Infraestrutura em Nuvem',
      description: 'Implementamos e gerenciamos infraestrutura em nuvem utilizando Kubernetes (K8s) para garantir que suas aplicações sejam escaláveis, resilientes e de alta disponibilidade.',
      icon: <FiCloud className="w-12 h-12 text-blue-600" />,
      technologies: ['Kubernetes', 'Docker', 'AWS', 'Google Cloud', 'Azure']
    },
    {
      title: 'Consultoria Técnica',
      description: 'Oferecemos consultoria especializada em arquitetura de software, melhores práticas de desenvolvimento, CI/CD, e otimização de performance para ajudar sua equipe a alcançar resultados excepcionais.',
      icon: <FiDatabase className="w-12 h-12 text-blue-600" />,
      technologies: ['Arquitetura de Software', 'DevOps', 'CI/CD', 'Performance']
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
              Nossos Serviços
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Soluções tecnológicas completas para impulsionar seu negócio
            </motion.p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">O que oferecemos</h2>
            <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
              Na DataSynk, oferecemos uma gama completa de serviços de desenvolvimento de software, desde a concepção até a implementação e manutenção. Utilizamos as tecnologias mais modernas e eficientes para criar soluções personalizadas que atendam às necessidades específicas do seu negócio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Processo */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nosso Processo</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-4">Descoberta e Planejamento</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Iniciamos cada projeto com uma fase de descoberta detalhada, onde trabalhamos em estreita colaboração com você para entender completamente seus objetivos, requisitos e expectativas. Analisamos o mercado, identificamos oportunidades e definimos métricas de sucesso claras. Com base nessas informações, desenvolvemos um plano de projeto abrangente que serve como nosso roteiro para o desenvolvimento.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-4">Design e Prototipagem</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Após a fase de planejamento, nossa equipe de design cria wireframes e protótipos interativos que visualizam a interface do usuário e o fluxo de navegação. Trabalhamos iterativamente, refinando o design com base no seu feedback até chegarmos a uma solução que atenda perfeitamente às suas necessidades. Esta abordagem garante que estejamos alinhados antes de iniciar o desenvolvimento, economizando tempo e recursos.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-4">Desenvolvimento</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Com o design aprovado, nossa equipe de desenvolvimento começa a construir sua solução utilizando metodologias ágeis. Dividimos o projeto em sprints, entregando incrementos funcionais em intervalos regulares. Isso permite que você veja o progresso constante e forneça feedback ao longo do caminho. Seguimos rigorosos padrões de codificação e realizamos revisões de código para garantir qualidade e manutenibilidade.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-4">Testes e Garantia de Qualidade</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A qualidade é uma prioridade em cada projeto. Realizamos testes rigorosos, incluindo testes unitários, de integração e de aceitação do usuário, para garantir que sua solução funcione perfeitamente em todos os cenários. Também realizamos testes de desempenho, segurança e compatibilidade para garantir que sua aplicação seja robusta, segura e acessível em diferentes dispositivos e navegadores.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-4">Implantação e Suporte Contínuo</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Após a aprovação final, implantamos sua solução em ambiente de produção, garantindo uma transição suave. Não terminamos quando o projeto é lançado - oferecemos suporte contínuo, monitoramento e manutenção para garantir que sua solução continue funcionando perfeitamente. Também fornecemos análises regulares de desempenho e recomendações para melhorias futuras, ajudando seu produto a evoluir com o tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
