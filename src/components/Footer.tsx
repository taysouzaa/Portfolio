import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/taysouzaa', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/taynara-correia-souza', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=taynara.souza.dev@gmail.com', 
      label: 'E-mail' 
    }
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-400">
              Taynara Souza
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 max-w-md">
              Desenvolvedora Full Stack especializada em sistemas web, integrações e automação de processos.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-cyan-500 hover:text-white transition-all group"
                aria-label={social.label}
              >
                <social.icon 
                  size={20} 
                  className="text-blue-600 dark:text-cyan-400 group-hover:text-white transition-colors" 
                />
              </a>
            ))}
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-slate-800 text-center md:text-left">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Taynara Souza. Soluções digitais estruturadas para gerar eficiência e resultado.
          </p>
        </div>

      </div>
    </footer>
  );
}