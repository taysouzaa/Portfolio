import { Heart, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/taysouzaa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/taynara-correia-souza', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/souz.tayyy', label: 'Instagram' },
    { icon: Mail, href: 'mailto:taynara.souza.dev@gmail.com', label: 'E-mail' }
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-400 mb-4">
              Taynara Souza
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Desenvolvedora Full Stack apaixonada por criar soluções digitais inovadoras e de alto impacto.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {['Sobre', 'Habilidades', 'Experiência', 'Projetos', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-cyan-500 hover:text-white transition-all group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-blue-600 dark:text-cyan-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Taynara Souza. Todos os direitos reservados.
            </p>

            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              Feito com <Heart size={16} className="text-red-500 fill-current" /> e muito código
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
