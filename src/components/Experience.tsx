import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
    icon: Briefcase,
    period: '2026 - Presente',
    title: 'Programadora Júnior',
    company: 'Método P4',
    description:
    'Responsável pela estruturação e desenvolvimento das soluções tecnológicas da empresa, atuando na criação de sistemas internos, automações e integrações estratégicas. Participação ativa na definição de arquitetura, organização de dados e otimização de processos para ganho de eficiência e escalabilidade.',
    tech: [
    'React',
    'Node.js',
    'APIs REST',
    'n8n',
    'SQL Server',
    'Integração de Sistemas',
    'Arquitetura de Software',
    'Automação de Processos'
  ]
},
  {
    icon: Briefcase,
    period: '2026 - Presente',
    title: 'Full Stack Developer',
    company: 'Atuação Independente | Projetos para Empresas',
    description:
      'Desenvolvimento de sistemas web, integrações e automações orientadas à eficiência operacional. Atuação completa desde o levantamento de requisitos até deploy e manutenção, com foco em arquitetura organizada, escalabilidade e performance.',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'Python',
      'APIs REST',
      'SQL Server',
      'Docker',
      'Google Cloud',
      'n8n',
      'Git'
    ]
  },
  {
    icon: GraduationCap,
    period: '2024 - 2025',
    title: 'Técnico em Desenvolvimento de Sistemas',
    company: 'Gustavo Peccinini - Escola Técnica Estadual',
    description:
      'Formação técnica com foco em arquitetura de software, modelagem de banco de dados e desenvolvimento de aplicações completas. Projeto final voltado à automação institucional com integrações e fluxo automatizado de comunicação.',
    tech: [
      'R.O.E. – Sistema com integração Google APIs e automação via n8n',
      'Modelagem de Banco de Dados',
      'Engenharia de Software'
    ]
  }
];

 const certifications = [
  { name: 'Jornada: Pipeline API com Agente de IA', institution: 'Jornada de Dados', date: 'Mai/2025' },
  { name: 'Jornada: CrewAI e FastMCP', institution: 'Jornada de Dados', date: 'Mai/2025' },
  { name: 'Jornada Python-n8n', institution: 'Jornada de Dados', date: 'Jun/2025' },
  { name: 'Imersão Cloud DevOps', institution: 'Alura', date: 'Jul/2025' },
  { name: 'NLW Agents - Iniciante', institution: 'Rocketseat', date: 'Jul/2025' },
  { name: 'NLW Agents - Avançado', institution: 'Rocketseat', date: 'Jul/2025' },
  { name: 'Imersão Dev Agentes de IA Google', institution: 'Alura', date: 'Set/2025' }
];


  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experiência
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 border-l-2 border-blue-600 dark:border-cyan-500"
            >
              <div className="absolute -left-[17px] top-0 w-8 h-8 bg-blue-600 dark:bg-cyan-500 rounded-full flex items-center justify-center">
                <exp.icon className="text-white" size={16} />
              </div>

              <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all">
                <span className="inline-block px-3 py-1 bg-blue-600 dark:bg-cyan-500 text-white text-sm rounded-full mb-3 font-medium">
                  {exp.period}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>

                <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-3">
                  {exp.company}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-slate-700 text-blue-700 dark:text-cyan-400 text-sm rounded-lg border border-blue-200 dark:border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Cursos e Certificações
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-blue-900/30 rounded-lg hover:shadow-md transition-all"
              >
                <div className="w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.institution} • {cert.date}
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
