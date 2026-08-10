import { Reveal } from "@/components/Reveal";

const hours = [
  ["Martes a jueves", "19:00 – 23:30"],
  ["Viernes y sábado", "13:00 – 16:00 · 19:00 – 00:30"],
  ["Domingo", "13:00 – 17:00"],
  ["Lunes", "Cerrado"],
];

export function Visit() {
  return (
    <section id="reservar" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow rule-dot text-primary">Visitanos</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.03] tracking-[-0.02em]">
            Muelle viejo, Puerto Aldea
          </h2>

          <address className="mt-8 not-italic text-[1.05rem] font-light leading-relaxed text-muted-foreground">
            Carrer del Moll Vell 14
            <br />
            Puerto Aldea, 07840
            <br />
            <a href="tel:+34900000000" className="story-link text-foreground">
              +34 900 000 000
            </a>
          </address>

          <dl className="mt-10 border-t border-border">
            {hours.map(([day, time]) => (
              <div
                key={day}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-border py-4"
              >
                <dt className="min-w-0 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                  {day}
                </dt>
                <dd className="shrink-0 text-sm">{time}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#reservar"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:brightness-110"
          >
            Reservar mesa
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-sm border border-border bg-secondary shadow-[var(--shadow-warm)]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70 [background-image:linear-gradient(color-mix(in_oklab,var(--olive)_18%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklab,var(--olive)_18%,transparent)_1px,transparent_1px)] [background-size:44px_44px]"
            />
            <div
              aria-hidden
              className="absolute left-[-10%] top-[62%] h-40 w-[130%] -rotate-6 bg-[color-mix(in_oklab,var(--olive)_22%,transparent)]"
            />
            <div className="absolute inset-0 grid place-items-center px-8 text-center">
              <div>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-warm)]">
                  ●
                </div>
                <p className="mt-5 font-display text-2xl">Bramante</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Mapa embebido (demo)
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
