import React from 'react';
import { Globe, Database, Calendar, Users, TrendingUp, Target } from 'lucide-react';

const OportunidadesPerdidas = () => {
  const oportunidades = [
    {
      icon: Globe,
      title: 'Venda Nacional',
      description: 'Expansão via e-commerce e marketplaces (Mercado Livre, Amazon, Shopee)',
      impact: 'Acesso a todo o mercado brasileiro',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Database,
      title: 'Dados Inteligentes',
      description: 'Uso de dados de clientes para decisões estratégicas e personalização',
      impact: 'Decisões baseadas em dados reais',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Calendar,
      title: 'Datas Sazonais',
      description: 'Exploração de Black Friday, Natal, Dia das Mães e outras datas especiais',
      impact: 'Aumento significativo nas vendas',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: Users,
      title: 'Relacionamento',
      description: 'Fidelização via redes sociais e CRM integrado',
      impact: 'Clientes recorrentes e engajados',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'SEO, Google Ads, redes sociais com ROI mensurável',
      impact: 'Menor custo por aquisição',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: Target,
      title: 'Segmentação Avançada',
      description: 'Campanhas personalizadas para diferentes públicos',
      impact: 'Maior conversão e eficiência',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    }
  ];

  return (
    <section id="oportunidades" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-600/10 px-4 py-2 rounded-lg text-sm font-medium mb-6">
            <Target className="h-4 w-4 text-green-400" />
            <span className="text-green-400">Oportunidades Ignoradas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Oportunidades que Estão Sendo Ignoradas
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A ausência digital impede a exploração de oportunidades significativas 
            que poderiam transformar o negócio da Danilo Promoção.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {oportunidades.map((oportunidade, index) => {
            const Icon = oportunidade.icon;
            return (
              <div
                key={index}
                className={`${oportunidade.bgColor} ${oportunidade.borderColor} border p-8 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`${oportunidade.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {oportunidade.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {oportunidade.description}
                </p>
                
                <div className="text-sm font-medium text-gray-500">
                  Impacto: {oportunidade.impact}
                </div>
              </div>
            );
          })}
        </div>

        {/* Recommendation Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-12 rounded-lg text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Recomendação Estratégica
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Implantação de e-commerce omnichannel e marketing digital integrado
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold mb-2">Investimento Inicial</h4>
              <p className="opacity-90">R$ 50.000 a R$ 150.000</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Retorno Estimado</h4>
              <p className="opacity-90">Em 3 a 6 meses</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Plataformas Sugeridas</h4>
              <p className="opacity-90">Loja Integrada, Nuvemshop, Shopify</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OportunidadesPerdidas; 