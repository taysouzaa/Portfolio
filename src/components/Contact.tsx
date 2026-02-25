import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/taysouzaa',
      username: 'github.com/taysouzaa'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/taynara-correia-souza',
      username: 'linkedin.com/in/taynara-correia-souza'
    },
    {
      icon: Mail,
      label: 'E-mail',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=taynara.souza.dev@gmail.com',
      username: 'taynara.souza.dev@gmail.com'
}
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Disponível para Projetos e Contratos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Desenvolvimento de sistemas web, integrações e automações sob demanda para empresas e profissionais.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-blue-50 dark:bg-slate-800 rounded-lg hover:bg-blue-100 dark:hover:bg-slate-700 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-600 dark:bg-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <social.icon className="text-white" size={28} />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 dark:text-white">
                    {social.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {social.username}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 p-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl text-white text-center shadow-xl">
            <h4 className="font-bold text-2xl mb-4">
              Solicite um Orçamento
            </h4>
            <p className="text-blue-50 text-lg mb-6 max-w-xl mx-auto">
              Entre em contato para discutir seu projeto. Atuo no desenvolvimento de soluções sob medida, com foco em eficiência, organização e escalabilidade.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=taynara.souza.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-md"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}