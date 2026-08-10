import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Salón de Bramante al atardecer, con el fuego encendido y vista al mar"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--ink)_72%,transparent),color-mix(in_oklab,var(--ink)_35%,transparent)_45%,color-mix(in_oklab,var(--ink)_88%,transparent))]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32 sm:px-10 lg:pb-28">
        <p className="eyebrow text-cream/70 animate-fade-in">
          Puerto Aldea &middot; Cocina mediterránea al fuego
        </p>
        <h1 className="animate-fade-in mt-6 font-display text-[clamp(3.5rem,13vw,10rem)] leading-[0.86] tracking-[-0.03em] text-cream">
          Bramante
        </h1>
        <p className="animate-fade-in mt-8 max-w-xl text-lg font-light leading-relaxed text-cream/80">
          Brasa lenta, aceite de oliva nuevo y producto de la bahía. Una casa donde se
          cocina con paciencia y se come sin apuro.
        </p>
        <div className="animate-fade-in mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#reservar"
            className="inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_18px_40px_-18px_var(--primary)]"
          >
            Reservar mesa
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-cream/35 px-9 py-4 text-xs uppercase tracking-[0.22em] text-cream/90 transition-colors duration-300 hover:bg-cream/10"
          >
            Ver el menú
          </a>
        </div>
      </div>
    </section>
  );
}
