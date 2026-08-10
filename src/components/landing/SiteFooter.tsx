import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="surface-dark">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl tracking-[-0.02em] text-cream">Bramante</div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-cream/55">
              Cocina mediterránea al fuego. Muelle viejo, Puerto Aldea.
            </p>
            <div className="mt-6 flex gap-3">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-cream/25 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Contacto</h3>
            <ul className="mt-5 space-y-2 text-sm font-light text-cream/60">
              <li>Carrer del Moll Vell 14</li>
              <li>Puerto Aldea, 07840</li>
              <li>
                <a href="tel:+34900000000" className="hover:text-gold">
                  +34 900 000 000
                </a>
              </li>
              <li>
                <a href="mailto:hola@bramante.demo" className="hover:text-gold">
                  hola@bramante.demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Newsletter</h3>
            <p className="mt-5 text-sm font-light leading-relaxed text-cream/60">
              Menús de temporada y cenas a fuego abierto, una vez al mes.
            </p>
            <form
              className="mt-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setEmail("");
              }}
            >
              <div className="flex items-center gap-2 border-b border-cream/25 pb-2 focus-within:border-gold">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  aria-label="Tu email"
                  className="min-w-0 flex-1 bg-transparent text-sm text-cream placeholder:text-cream/35 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-gold"
                >
                  Enviar
                </button>
              </div>
              {sent && (
                <p className="mt-3 text-xs text-cream/60">
                  Listo, te sumamos a la lista (demo).
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-cream/12 pt-6 text-xs text-cream/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Bramante. Restaurante ficticio.</span>
          <span>Sitio demostrativo</span>
        </div>
      </div>
    </footer>
  );
}
