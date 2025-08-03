import React from 'react';
import { TrendingUp, Award, Users, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const BenchmarkConclusao = () => {
  const benchmarks = [
    {
      company: 'Portobello Shop',
      growth: '+22,5%',
      description: 'Maior varejista de revestimentos do Brasil com 150 lojas',
      highlights: ['Plataforma omnichannel (Shop 360)', 'IA em previsão de demanda', 'Marketing digital premiado'],
      color: 'text-blue-400'
    },
    {
      company: 'Obramax',
      description: 'Atacarejo de materiais de construção',
      highlights: ['E-commerce integrado', 'Foco em profissionais', 'Operação em SP e RJ'],
      color: 'text-green-400'
    },
    {
      company: 'Leroy Merlin',
      description: 'Mais de 80 lojas no Brasil',
      highlights: ['Presença online consolidada', 'Catálogo digital amplo', 'Integração omnichannel'],
      color: 'text-purple-400'
    }
  ];

  const proximosPassos = [
    'Contratar consultoria especializada em digitalização',
    'Planejar e implantar e-commerce em 90 dias',
    'Criar equipe de marketing digital interna ou terceirizada',
    'Realizar campanha de relançamento digital com foco em fidelização'
  ];

  return (
    <section id="benchmark" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benchmark Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-600/10 px-4 py-2 rounded-lg text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400">Benchmark Digital</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Concorrentes Já Estão Digitalizados
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empresas do setor já implementaram soluções digitais e estão colhendo os resultados. 
              A Danilo Promoção precisa agir rapidamente para não perder mais mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benchmarks.map((benchmark, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Award className={`h-6 w-6 ${benchmark.color}`} />
                  <h3 className="text-xl font-bold text-white">{benchmark.company}</h3>
                </div>
                
                {benchmark.growth && (
                  <div className="text-2xl font-bold text-green-400 mb-3">
                    {benchmark.growth} crescimento
                  </div>
                )}
                
                <p className="text-gray-300 mb-4">
                  {benchmark.description}
                </p>
                
                <ul className="space-y-2">
                  {benchmark.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="bg-red-600/10 border border-red-500/20 p-12 rounded-lg mb-16">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">
              Conclusão Crítica
            </h3>
            <blockquote className="text-xl text-gray-300 italic mb-8 max-w-4xl mx-auto">
              "Não investir em presença digital é equivalente a fechar uma loja invisível 
              no maior shopping do país."
            </blockquote>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              A Danilo Promoção corre o risco de estagnação e perda de mercado ao não se adaptar 
              ao ambiente digital. O prejuízo atual ultrapassa <span className="text-red-400 font-bold">R$ 4,5 milhões/ano</span>, 
              impactando vendas, imagem e competitividade. <span className="text-red-400 font-bold">É tempo de agir.</span>
            </p>
          </div>
        </div>

        {/* Próximos Passos */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-12 rounded-lg text-white">
          <h3 className="text-3xl font-bold text-center mb-8">
            Próximos Passos Recomendados
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">Ações Imediatas</h4>
              <ul className="space-y-4">
                {proximosPassos.map((passo, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-lg">{passo}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Cronograma Sugerido</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Diagnóstico Digital</span>
                  <span className="bg-white/20 px-3 py-1 rounded">Semana 1-2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Planejamento Estratégico</span>
                  <span className="bg-white/20 px-3 py-1 rounded">Semana 3-4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Implantação E-commerce</span>
                  <span className="bg-white/20 px-3 py-1 rounded">Mês 2-3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Marketing Digital</span>
                  <span className="bg-white/20 px-3 py-1 rounded">Mês 3-4</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Iniciar Transformação Digital</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenchmarkConclusao; 