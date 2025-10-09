import { Code, Server, Database, Workflow, Layers, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Front-end',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design']
    },
    {
      icon: Server,
      title: 'Back-end',
      skills: ['Node.js', 'APIs REST', 'Lógica de Negócios', 'Arquitetura de Software', 'Lógica de Programação']
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      skills: ['SQL Server', 'MySQL', 'NoSQL', 'Modelagem de Dados']
    },
    {
      icon: Workflow,
      title: 'Automação',
      skills: ['Python', 'n8n', 'Scripts', 'APIs']
    },
    {
      icon: Layers,
      title: 'Metodologias',
      skills: ['Metodologias Ágeis', 'Github', 'Git', 'Clean Code']
    },
    {
      icon: Zap,
      title: 'Outros',
      skills: ['Gestão de Projetos', 'Trabalho em Equipe', 'Performance', 'Automação']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-slate-900 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/20 transition-all hover:-translate-y-1 border border-gray-200 dark:border-slate-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 text-sm rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
