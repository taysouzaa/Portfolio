import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 transition-colors" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles size={16} />
          <span className="text-sm font-medium">Desenvolvedora Full Stack</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Taynara Souza
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Crio <span className="text-gradient font-semibold">soluções web modernas</span>, automações e experiências digitais de alto impacto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-cyan-500/50"
          >
            Ver Projetos
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 rounded-lg font-semibold border-2 border-blue-600 dark:border-cyan-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all"
          >
            Contato
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '2+', label: 'Anos de Estudos' },
            { value: '10+', label: 'Projetos Concluídos' },
            { value: '10+', label: 'Tecnologias' },
            { value: '100%', label: 'Dedicação' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
