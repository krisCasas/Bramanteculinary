import aboutImg from "@/assets/about.jpg";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <img
            src={aboutImg}
            alt="Chef emplatando junto al horno de leña"
            width={1200}
            height={1400}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-warm)]"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow rule-dot text-primary">Sobre nosotros</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.03] tracking-[-0.02em]">
            Una casa vieja, un fuego encendido desde 2011.
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] font-light leading-relaxed text-muted-foreground">
            <p>
              Bramante nació en una casa de pescadores frente al puerto. Elena Bramante
              volvió de Liguria con un cuaderno de recetas de su abuela y la idea fija de
              cocinar todo sobre brasa de olivo y encina.
            </p>
            <p>
              Trabajamos con lo que llega esa mañana: pesca de bahía, huerta a doce
              kilómetros, aceite prensado por vecinos. La carta cambia cuando cambia el
              cajón, y eso nos parece lo correcto.
            </p>
            <p className="border-l-2 border-primary/40 pl-5 font-display text-xl italic text-foreground">
              &ldquo;Nada complicado. Fuego, tiempo y buen producto.&rdquo;
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["14", "años de brasa"],
              ["100%", "producto local"],
              ["1", "carta por temporada"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-primary">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
