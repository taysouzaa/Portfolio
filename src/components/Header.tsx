import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#experience', label: 'Experiência' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-blue-600 dark:text-cyan-400 transition-colors">
            Taynara Souza
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} className="text-cyan-400" /> : <Moon size={20} className="text-blue-600" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} className="text-cyan-400" /> : <Moon size={20} className="text-blue-600" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
