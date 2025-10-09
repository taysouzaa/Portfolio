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
              Sou <span className="font-semibold text-blue-600 dark:text-cyan-400">técnica em Desenvolvimento de Sistemas</span>, formada junto ao ensino médio, e desde então venho me especializando em desenvolvimento Full Stack.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Atuei em projetos para escolas, desenvolvendo sistemas de gestão, automação de processos e aplicações web. Busco sempre unir <span className="font-semibold text-blue-600 dark:text-cyan-400">tecnologia, criatividade e eficiência</span>.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Minha paixão é transformar ideias complexas em soluções digitais intuitivas e de alto impacto, sempre com foco em qualidade, performance e experiência do usuário.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Code2,
                title: 'Desenvolvimento Full Stack',
                description: 'Conhecimento do ciclo de desenvolvimento, do front-end ao back-end.'
              },
              {
                icon: Lightbulb,
                title: 'Soluções Criativas',
                description: 'Transformo desafios em oportunidades com pensamento inovador.'
              },
              {
                icon: Rocket,
                title: 'Resultados de Alto Impacto',
                description: 'Foco em entregar valor real e mensurável para cada projeto.'
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
