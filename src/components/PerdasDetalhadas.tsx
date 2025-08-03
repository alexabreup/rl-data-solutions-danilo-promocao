import React from 'react';
import { ShoppingCart, TrendingDown, Eye, Settings, Users, BarChart3 } from 'lucide-react';

const PerdasDetalhadas = () => {
  const perdas = [
    {
      icon: ShoppingCart,
      title: 'Perda de Vendas Diretas',
      subtitle: 'E-commerce Inexistente',
      value: 'R$ 300.000/mês',
      description: 'O e-commerce poderia impulsionar o faturamento entre 20% e 40% (Nielsen/Compre & Confie). Atualmente, a Danilo Promoção perde cerca de R$ 300.000,00/mês em vendas potenciais.',
      impact: 'R$ 3,6 milhões anualmente',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      icon: TrendingDown,
      title: 'Marketing Tradicional',
      subtitle: 'Alto Custo e Baixo Retorno',
      value: 'R$ 30.000/mês',
      description: 'O investimento atual em marketing tradicional (panfletos, rádio, TV local) é de aproximadamente R$ 100.000/mês. O marketing digital oferece menor Custo Por Aquisição (CPA) e maior segmentação.',
      impact: '30% de economia potencial',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: Eye,
      title: 'Falta de Visibilidade',
      subtitle: 'Engajamento Reduzido',
      value: 'R$ 50.000/mês',
      description: '74% dos consumidores pesquisam online antes de comprar (Google, 2025). Empresas sem presença digital perdem relevância nas buscas e na fidelização de clientes.',
      impact: 'Perda de clientes recorrentes',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: Settings,
      title: 'Ineficiência Operacional',
      subtitle: 'Processos Manuais',
      value: 'R$ 30.000/mês',
      description: 'E-commerce e ferramentas digitais otimizam gestão de estoque, atendimento e promoções. A ausência digital resulta em processos manuais, retrabalho e desperdícios.',
      impact: 'Redução de produtividade',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    }
  ];

  return (
    <section id="perdas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 px-4 py-2 rounded-lg text-sm font-medium mb-6">
            <BarChart3 className="h-4 w-4 text-red-400" />
            <span className="text-red-400">Análise Detalhada</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Análise de Perdas por Segmento
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Identificamos quatro áreas críticas onde a ausência digital está causando 
            prejuízos significativos para a Danilo Promoção.
          </p>
        </div>

        {/* Losses Grid */}
        <div className="space-y-12">
          {perdas.map((perda, index) => {
            const Icon = perda.icon;
            return (
              <div
                key={index}
                className={`${perda.bgColor} ${perda.borderColor} border rounded-lg p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Icon and Title */}
                  <div className="text-center lg:text-left">
                    <div className={`${perda.color} w-20 h-20 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4`}>
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {perda.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      {perda.subtitle}
                    </p>
                  </div>

                  {/* Value and Impact */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {perda.value}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Impacto: {perda.impact}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-1">
                    <p className="text-gray-700 leading-relaxed">
                      {perda.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Impact */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-lg text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Total de Perdas Mensais: R$ 380.000
          </h3>
          <p className="text-xl opacity-90">
            Isso representa um prejuízo anual de <span className="font-bold">R$ 4.560.000,00</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerdasDetalhadas; 