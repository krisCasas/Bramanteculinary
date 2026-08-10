import { useEffect, useState } from "react";

const links = [
  ["Nosotros", "#nosotros"],
  ["Menú", "#menu"],
  ["Galería", "#galeria"],
  ["Visitanos", "#reservar"],
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[color-mix(in_oklab,var(--ink)_92%,transparent)] py-3 shadow-[var(--shadow-warm)] backdrop-blur"
          : "py-6"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 sm:px-10">
        <a
          href="#top"
          className="min-w-0 truncate font-display text-xl tracking-[-0.02em] text-cream"
        >
          Bramante
        </a>
        <ul className="hidden shrink-0 items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/70 transition-colors duration-300 hover:text-gold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
