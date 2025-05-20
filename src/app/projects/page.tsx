"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'App de Delivery',
      description: 'Aplicativo mobile completo para delivery de alimentos, com funcionalidades para clientes, restaurantes e entregadores. Desenvolvido com React Native e integração com APIs de pagamento e geolocalização.',
      image: '/project-1.jpg',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
      category: 'Mobile'
    },
    {
      title: 'Dashboard Administrativo',
      description: 'Sistema de dashboard administrativo para gestão de operações empresariais, com análises em tempo real, relatórios personalizados e controle de acesso por níveis de permissão.',
      image: '/project-2.jpg',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      category: 'Web'
    },
    {
      title: 'Sistema de Gestão Financeira',
      description: 'Aplicação desktop para gestão financeira empresarial, com controle de fluxo de caixa, conciliação bancária, emissão de relatórios fiscais e integração com sistemas contábeis.',
      image: '/project-3.jpg',
      technologies: ['Electron', 'React', 'TypeScript', 'SQLite'],
      category: 'Desktop'
    },
    {
      title: 'Plataforma de E-commerce',
      description: 'Plataforma completa de e-commerce com catálogo de produtos, carrinho de compras, sistema de pagamento, gestão de estoque e painel administrativo para lojistas.',
      image: '/project-4.jpg',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Redis'],
      category: 'Web'
    },
    {
      title: 'Infraestrutura em Nuvem',
      description: 'Implementação de infraestrutura escalável em nuvem para startup de tecnologia, com orquestração de contêineres, CI/CD automatizado e monitoramento em tempo real.',
      image: '/project-5.jpg',
      technologies: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Prometheus'],
      category: 'DevOps'
    },
    {
      title: 'Aplicativo de Saúde',
      description: 'Aplicativo mobile para monitoramento de saúde e bem-estar, com tracking de atividades físicas, lembretes de medicação, integração com dispositivos wearables e relatórios personalizados.',
      image: '/project-6.jpg',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'GraphQL'],
      category: 'Mobile'
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
              Nossos Projetos
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conheça alguns dos projetos que desenvolvemos com excelência
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Tecnologias</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span 
                            key={tech} 
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossa Metodologia</h2>
            <p className="text-gray-700 dark:text-gray-300 text-center text-lg mb-12">
              Na DataSynk, seguimos uma metodologia ágil adaptada às necessidades específicas de cada projeto, garantindo entregas de alta qualidade, dentro do prazo e orçamento estabelecidos.
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Nossa abordagem para desenvolvimento de projetos combina as melhores práticas das metodologias ágeis com processos personalizados que desenvolvemos ao longo dos anos. Acreditamos que cada projeto é único e merece uma abordagem sob medida, mas sempre mantendo os princípios fundamentais de transparência, colaboração e melhoria contínua.
              </p>
              
              <p>
                Trabalhamos em ciclos de desenvolvimento curtos (sprints), geralmente de duas semanas, que permitem entregas incrementais e feedback constante. Isso nos dá a flexibilidade para ajustar o curso do projeto conforme necessário, garantindo que o resultado final esteja perfeitamente alinhado com as expectativas e necessidades do cliente.
              </p>
              
              <p>
                A comunicação é um pilar fundamental em nossa metodologia. Mantemos canais de comunicação abertos e realizamos reuniões regulares para garantir que todos os stakeholders estejam alinhados e informados sobre o progresso do projeto. Utilizamos ferramentas de gestão de projetos que permitem acompanhamento em tempo real, garantindo total transparência durante todo o ciclo de desenvolvimento.
              </p>
              
              <p>
                Nosso compromisso com a qualidade se reflete em cada linha de código que escrevemos. Implementamos práticas como revisão de código, testes automatizados e integração contínua para garantir que nossas entregas atendam aos mais altos padrões de qualidade. Acreditamos que investir em qualidade desde o início do projeto resulta em produtos mais robustos e de fácil manutenção a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para iniciar seu projeto?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Entre em contato conosco hoje mesmo e descubra como podemos transformar sua ideia em um projeto de sucesso.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Fale com nossa equipe
          </Link>
        </div>
      </section>
    </>
  );
}
