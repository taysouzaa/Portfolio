import { Code2, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sou <span className="font-semibold text-blue-600 dark:text-cyan-400">Desenvolvedora Full Stack</span> com formação técnica em Desenvolvimento de Sistemas, atuando na criação de aplicações web, integrações e automações voltadas à eficiência operacional.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Desenvolvo soluções completas, desde a modelagem da arquitetura até a implementação e deploy, sempre com foco em organização estrutural, escalabilidade e performance.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Meu objetivo é transformar processos manuais e regras de negócio em sistemas digitais claros, funcionais e sustentáveis, entregando tecnologia que gera resultado real.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Code2,
                title: 'Arquitetura e Desenvolvimento Full Stack',
                description: 'Construção de aplicações web completas, com estrutura organizada e integração entre front-end e back-end.'
              },
              {
                icon: Lightbulb,
                title: 'Integrações e Automação',
                description: 'Implementação de APIs e fluxos automatizados para otimizar processos e reduzir tarefas manuais.'
              },
              {
                icon: Rocket,
                title: 'Soluções Orientadas a Resultado',
                description: 'Tecnologia aplicada para gerar eficiência operacional, escalabilidade e melhoria contínua.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-blue-50 dark:bg-slate-800 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-cyan-500 rounded-lg flex items-center justify-center">
                    <item.icon className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
