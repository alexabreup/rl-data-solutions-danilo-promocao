import React from 'react';
import { Heart, Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R&L</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">R&L Data Solutions</h3>
                <p className="text-sm text-gray-400">Análise de Perdas Digitais</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialistas em análise de dados e transformação digital, 
              ajudando empresas a identificar e recuperar oportunidades perdidas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Análise de Perdas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Business Intelligence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Transformação Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Consultoria em Dados
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Otimização de Processos
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Início
                </a>
              </li>
              <li>
                <a href="#resumo" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Resumo Executivo
                </a>
              </li>
              <li>
                <a href="#perdas" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Análise de Perdas
                </a>
              </li>
              <li>
                <a href="#oportunidades" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Oportunidades
                </a>
              </li>
              <li>
                <a href="#benchmark" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Benchmark
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Telefone</p>
                  <p className="text-white">+55 11 94526-5110</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">contato@rldatasolutions.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Localização</p>
                  <p className="text-white">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 R&L Data Solutions. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Desenvolvido com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>por R&L Data Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;