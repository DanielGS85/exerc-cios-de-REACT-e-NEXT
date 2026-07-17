export default function Header() {
  return (
    <header className="flex items-center justify-between bg-slate-800 text-white px-5 py-3 rounded-xl">
      <b>Turma DEV SISTEM</b>
      <nav className="flex gap-4">
        <a href="#">Início</a>
        <a href="#">Turma</a>
      </nav>
    </header>
  );
}