// Array de objetos com os projetos
const projetos = [
  {
    id: 1,
    titulo: "Lista de Tarefas (To-Do)",
    descricao: "Aplicação simples de lista de tarefas desenvolvida com HTML, CSS e JavaScript.",
    link: "https://github.com/jesualdocruz-rgb/jesualdoncruz.gtihub.io"
  },
  {
    id: 2,
    titulo: "Portfólio MVP",
    descricao: "Este próprio portfólio que você está vendo agora. Projeto entregue para a disciplina de PROGRAMAÇÃO WEB.",
    link: "https://github.com/jesualdocruz-rgb/jesualdoncruz.gtihub.iop"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Meus Projetos</h2>
        
        {/* Grid de projetos renderizado dinamicamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-blue-500 dark:bg-blue-900 text-white rounded-lg shadow-lg dark:shadow-xl p-6 hover:shadow-xl dark:hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{projeto.titulo}</h3>
              <p className="text-gray-100 dark:text-gray-200 mb-4">{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 dark:text-cyan-200 font-bold hover:underline"
              >
                Ver projeto no GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
