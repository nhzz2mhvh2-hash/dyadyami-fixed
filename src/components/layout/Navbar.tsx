export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
      <div className="text-white font-serif text-2xl tracking-tighter">DYADYAMI</div>
      <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">
        <a href="#" className="hover:text-cyan-luxury transition-all">Expeditions</a>
        <a href="#" className="hover:text-cyan-luxury transition-all">Residences</a>
        <a href="#" className="hover:text-cyan-luxury transition-all">Concierge</a>
      </div>
    </nav>
  );
}
