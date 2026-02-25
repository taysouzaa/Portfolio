import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-blue-50 via-cyan-50 to-blue-100 
        dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 
        transition-colors" 
      />

      {/* Blurs decorativos (reduzidos no mobile) */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-20 left-4 sm:left-10 w-52 sm:w-72 h-52 sm:h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-4 sm:right-10 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles size={14} className="sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-medium">
            Full Stack & Automação de Processos
          </span>
        </div>

        {/* Nome */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Taynara Souza
        </h1>

        {/* Subtexto */}
        <p className="text-base sm:text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2">
          Desenvolvo sistemas web, integrações e automações que transformam processos em resultados.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 dark:hover:shadow-cyan-500/40"
          >
            Ver Projetos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 rounded-lg font-semibold border-2 border-blue-600 dark:border-cyan-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all"
          >
            Contato
          </a>
        </div>

        {/* Estatísticas */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: 'Soluções', label: 'Full Stack & Automação' },
            { value: 'Integrações', label: 'APIs & Webhooks' },
            { value: 'Arquitetura', label: 'Estrutura Escalável' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
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