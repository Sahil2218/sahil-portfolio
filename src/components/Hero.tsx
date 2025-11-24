import Container from "./Container";

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-20">
      <Container>
        <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-600/40 text-green-400 px-3 py-1 rounded-full text-xs">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for work
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-6 mb-3">
          I build sleek, fast, <span className="text-sky-400">agentic</span> web apps.
        </h1>
        <p className="text-zinc-400 max-w-2xl">
          Full-stack developer crafting dashboards, AI assistants, and intuitive user experiences.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#works" className="bg-sky-400 text-black px-4 py-2 rounded-md font-semibold">View Work</a>
          <a href="#contact" className="border border-white/20 px-4 py-2 rounded-md">Contact</a>
        </div>
      </Container>
    </section>
  );
}
