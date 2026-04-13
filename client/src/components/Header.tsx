import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-100 bg-blue-600 dark:bg-gray-900 text-white shadow-md transition-colors duration-300">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Jesualdo Cruz</div>
        
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            <li>
              <a href="#sobre" className="text-white hover:text-cyan-300 transition-colors">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#projetos" className="text-white hover:text-cyan-300 transition-colors">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato" className="text-white hover:text-cyan-300 transition-colors">
                Contato
              </a>
            </li>
          </ul>

          {/* Botão de alternância de tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-blue-700 dark:bg-gray-700 hover:bg-blue-800 dark:hover:bg-gray-600 transition-colors"
            aria-label="Alternar modo escuro"
            title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
