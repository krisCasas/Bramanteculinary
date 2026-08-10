import { Reveal } from "@/components/Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const shots = [
  { src: g2, alt: "Rincón del comedor con pared de terracota", span: "row-span-2" },
  { src: g1, alt: "Pulpo a la brasa con limón quemado", span: "" },
  { src: g5, alt: "Pescado entero sobre brasas", span: "" },
  { src: g4, alt: "Servicio de vino natural en la barra", span: "row-span-2" },
  { src: g3, alt: "Risotto de hongos silvestres", span: "" },
  { src: g6, alt: "Bizcocho de aceite de oliva con higos", span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-36">
      <Reveal className="max-w-2xl">
        <p className="eyebrow rule-dot text-primary">La casa</p>
        <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.03] tracking-[-0.02em]">
          Luz de vela, humo y platos hondos
        </h2>
      </Reveal>

      <div className="mt-14 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:grid-cols-3 lg:gap-4">
        {shots.map((s, i) => (
          <Reveal key={s.alt} delay={(i % 3) * 100} className={s.span}>
            <div className="h-full overflow-hidden rounded-sm">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.06]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
