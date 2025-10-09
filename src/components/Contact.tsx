import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/taysouzaa',
      username: 'taysouzaa'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/taynara-correia-souza',
      username: 'taynara-correia-souza'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/souz.tayyy',
      username: '@souz.tayyy'
    },
    {
      icon: Mail,
      label: 'E-mail',
      href: 'mailto:taynara.souza.dev@gmail.com',
      username: 'taynara.souza.dev@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos Conversar?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Quer transformar ideias em soluções digitais? Entre em contato e vamos criar algo incrível juntos!
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
                  <div className="font-semibold text-lg text-gray-900 dark:text-white">{social.label}</div>
                  <div className="text-gray-600 dark:text-gray-400">{social.username}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 p-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl text-white text-center">
            <h4 className="font-bold text-2xl mb-3">Disponível para Projetos</h4>
            <p className="text-blue-50 text-lg">
              Estou sempre aberta a novos desafios e oportunidades de colaboração. Vamos criar algo incrível juntos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
