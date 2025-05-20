"use client";

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              DataSynk
            </h2>
            <p className="text-gray-300 max-w-xs">
              Transformando ideias em soluções tecnológicas inovadoras para
              impulsionar o seu negócio.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-300 hover:text-blue-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Tecnologias */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tecnologias</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">React Native</li>
              <li className="text-gray-300">React</li>
              <li className="text-gray-300">Next.js</li>
              <li className="text-gray-300">Electron</li>
              <li className="text-gray-300">Kubernetes (K8s)</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <FiMapPin className="text-blue-400" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FiPhone className="text-blue-400" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FiMail className="text-blue-400" />
                <span>contato@datasynk.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} DataSynk. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
