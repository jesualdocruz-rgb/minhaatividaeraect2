export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="mb-4">© 2026 Jesualdo Cruz - Portfólio MVP</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/jesualdocruz-rgb/jesualdoncruz.gtihub.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 dark:text-green-300 hover:underline"
          >
            GitHub
          </a>
          <span>|</span>
          <a
            href="https://www.linkedin.com/in/jesualdo-cruz-181b20400/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 dark:text-green-300 hover:underline"
          >
            LinkedIn
          </a>
          <span>|</span>
          <span className="text-green-400 dark:text-green-300">jesualdocruz@aluno.uespi.br</span>
        </div>
      </div>
    </footer>
  );
}
