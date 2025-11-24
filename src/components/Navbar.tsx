"use client";
import { useState, useEffect } from "react";

const sections = ["services", "works", "skills", "about", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <nav className="flex justify-between max-w-6xl mx-auto px-6 py-4">
        <a href="#top" className="font-bold text-lg">Sahil<span className="text-sky-400">.dev</span></a>
        <div className="flex gap-4 text-sm">
          {sections.map((s) => (
            <a key={s}
              href={`#${s}`}
              className={`${active === s ? "text-white" : "text-zinc-400"} hover:text-white transition`}>
              {s}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
