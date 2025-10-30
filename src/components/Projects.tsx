import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Sistema R.O.E.',
      description: 'Sistema de gestão escolar para automação comportamental e registro de ocorrências educacionais.',
      tech: ['N8N', 'Google Sheets', 'APIs', 'Gmail'],
      gradient: 'from-blue-600 to-cyan-500',
      link: 'https://registro-roe.vercel.app/',
      code: 'https://github.com/taysouzaa/Registro.roe/blob/main/index.html'
    },
    {
      title: 'Receitopia',
      description: 'Plataforma web simples para treinamento front-end. Site de receitas para teste de habilidades.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-blue-700 to-cyan-600',
      link: 'https://receitopia-receitas.vercel.app/',
      code: 'https://github.com/taysouzaa/Receitopia/blob/main/index.html'
    },
    {
      title: 'MetaAssistente',
      description: 'Ferramenta web de assistência estratégica baseada em IA para jogos competitivos.',
      tech: ['HTML', 'JavaScript', 'CSS'],
      gradient: 'from-cyan-600 to-blue-500',
      link: '#', // Link do projeto não informado
      code: 'https://github.com/taysouzaa/MetaAssistente/blob/main/rocketseat/src/index1.html'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, sempre com foco em qualidade e inovação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/20 transition-all hover:-translate-y-2 border border-gray-200 dark:border-slate-800"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 text-sm rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-cyan-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-cyan-600 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    Ver Projeto
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors font-medium"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>

              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className={`w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

