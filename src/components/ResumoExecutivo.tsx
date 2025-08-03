import React from 'react';
import { TrendingDown, AlertTriangle, DollarSign, Calendar } from 'lucide-react';

const ResumoExecutivo = () => {
  const impactos = [
    {
      icon: TrendingDown,
      title: 'Perda Mensal',
      value: 'R$ 380.000',
      description: 'Custo de oportunidade elevado',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      icon: DollarSign,
      title: 'Perda Anual',
      value: 'R$ 4.560.000',
      description: 'Impacto financeiro total',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      icon: AlertTriangle,
      title: 'Faturamento Afetado',
      value: '25%',
      description: 'Percentual do faturamento mensal',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: Calendar,
      title: 'Tempo Perdido',
      value: '12 meses',
      description: 'Oportunidades desperdiçadas',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    }
  ];

  return (
    <section id="resumo" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 px-4 py-2 rounded-lg text-sm font-medium mb-6">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-red-400">Resumo Executivo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Um Custo de Oportunidade Elevado
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A ausência digital da Danilo Promoção impacta diretamente o faturamento, 
            a competitividade e a sustentabilidade. Estimamos uma perda mensal de 
            <span className="text-red-400 font-bold"> R$ 380.000,00</span>, 
            cerca de <span className="text-red-400 font-bold">25% do faturamento</span>.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactos.map((impacto, index) => {
            const Icon = impacto.icon;
            return (
              <div
                key={index}
                className={`${impacto.bgColor} ${impacto.borderColor} border p-8 rounded-lg text-center hover:scale-105 transition-all duration-300`}
              >
                <div className={`${impacto.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {impacto.value}
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  {impacto.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed">
                  {impacto.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Warning Section */}
        <div className="bg-red-600/10 border border-red-500/20 p-8 rounded-lg text-center">
          <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            ⚠️ Atenção: Risco Crítico Identificado
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A Danilo Promoção corre o risco de estagnação e perda de mercado ao não se adaptar 
            ao ambiente digital. O prejuízo atual ultrapassa <span className="text-red-400 font-bold">R$ 4,5 milhões/ano</span>, 
            impactando vendas, imagem e competitividade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumoExecutivo; 