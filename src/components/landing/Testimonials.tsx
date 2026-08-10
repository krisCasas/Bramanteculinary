import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    quote:
      "Fuimos por el cordero y nos quedamos tres horas. El servicio te trata como si vivieras en el barrio de toda la vida.",
    name: "Marina Coll",
    meta: "Cena de aniversario",
  },
  {
    quote:
      "El pulpo es el mejor que probé fuera de Galicia. Y la carta de vinos naturales tiene cosas que no vi en ningún otro sitio.",
    name: "Tomás Iriarte",
    meta: "Cliente desde 2018",
  },
  {
    quote:
      "Un lugar sin pretensión y con muchísimo oficio. Reservamos la mesa larga del fondo para el equipo y salió redondo.",
    name: "Ana Ferreiro",
    meta: "Comida de equipo",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow rule-dot text-primary">Reseñas</p>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {reviews.map((r, i) => (
            <Reveal as="article" key={r.name} delay={i * 120}>
              <div className="flex h-full flex-col">
                <div className="text-gold" aria-label="5 de 5 estrellas">
                  ★★★★★
                </div>
                <blockquote className="mt-5 flex-1 font-display text-xl leading-[1.5] tracking-[-0.01em]">
                  {r.quote}
                </blockquote>
                <footer className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {r.meta}
                  </div>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
