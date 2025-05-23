"use client";

import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  const technologies = [
    {
      name: "React Native",
      image: "/Marquee/react-native.svg",
    },

    {
      name: "Next.js",
      image: "/Marquee/nextjs.svg",
    },
    {
      name: "TypeScript",
      image: "/Marquee/typescript.svg",
    },
    {
      name: "React",
      image: "/Marquee/react.svg",
    },
    {
      name: "Electron",
      image: "/Marquee/electron.svg",
    },
    {
      name: "Node.js",
      image: "/Marquee/node.svg",
    },
    {
      name: "NestJS",
      image: "/Marquee/nestjs.svg",
    },
    {
      name: "MongoDB",
      image: "/Marquee/mongo.svg",
    },
    {
      name: "PostgreSQL",
      image: "/Marquee/pgsql.svg",
    },
    {
      name: "Kubernetes",
      image: "/Marquee/kubernetes.svg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transformando ideias em soluções tecnológicas
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A DataSynk é especializada em desenvolvimento de software com as
              tecnologias mais modernas do mercado, oferecendo soluções
              completas para web, mobile e desktop.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
              >
                Fale Conosco <FiArrowRight />
              </Link>

              <Link
                href="/services"
                className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Nossos Serviços
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Nós - Resumo */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A DataSynk é uma empresa de tecnologia focada em desenvolver
                soluções inovadoras que impulsionam o crescimento dos nossos
                clientes. Com uma equipe de profissionais altamente
                qualificados, oferecemos serviços de desenvolvimento de software
                personalizados para atender às necessidades específicas de cada
                projeto.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nossa missão é transformar ideias em produtos digitais de alta
                qualidade, utilizando as melhores práticas e tecnologias do
                mercado. Acreditamos que a tecnologia deve ser uma aliada para o
                sucesso dos negócios, e trabalhamos incansavelmente para
                entregar soluções que façam a diferença.
              </p>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                Saiba mais sobre nós <FiArrowRight />
              </Link>
            </div>

            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg"
                alt="Equipe DataSynk"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Nossas Tecnologias</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Trabalhamos com as tecnologias mais modernas e eficientes do mercado
            para entregar soluções de alta qualidade e performance.
          </p>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-4"
          >
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mx-4 min-w-[200px] flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-3 relative">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {tech.name}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar a
            impulsionar seu negócio com soluções tecnológicas personalizadas.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Fale com um especialista
          </Link>
        </div>
      </section>
    </>
  );
}
