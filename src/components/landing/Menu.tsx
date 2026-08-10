import { Reveal } from "@/components/Reveal";

const dishes = [
  {
    name: "Risotto de hongos silvestres",
    desc: "Arroz carnaroli, porcini y morillas, mantequilla de tomillo y pecorino curado.",
    price: "€24",
    tag: "Primeros",
  },
  {
    name: "Pulpo de la bahía a la brasa",
    desc: "Cocido siete horas, limón quemado, pimentón de la Vera y patata aplastada.",
    price: "€28",
    tag: "Brasa",
  },
  {
    name: "Dorada entera al sarmiento",
    desc: "Pesca del día abierta al fuego, hinojo silvestre y aliño de ajo tostado.",
    price: "€32",
    tag: "Brasa",
  },
  {
    name: "Cordero lechal de nueve horas",
    desc: "Hombro confitado en su grasa, miel de romero y berenjena ahumada.",
    price: "€34",
    tag: "Brasa",
  },
  {
    name: "Burrata de la Vall con higos",
    desc: "Higos negros asados, avellana tostada y aceite nuevo de nuestra prensa.",
    price: "€16",
    tag: "Entrantes",
  },
  {
    name: "Alcachofas a la parrilla",
    desc: "Corazones tiernos, alioli de azafrán y ralladura de bottarga.",
    price: "€15",
    tag: "Entrantes",
  },
  {
    name: "Tortelli de calabaza y salvia",
    desc: "Pasta fresca del día, mantequilla noisette y amaretto rallado.",
    price: "€22",
    tag: "Primeros",
  },
  {
    name: "Bizcocho de aceite, miel e higos",
    desc: "Migas tibias, miel del monte y helado de leche quemada.",
    price: "€11",
    tag: "Postres",
  },
];

export function Menu() {
  return (
    <section id="menu" className="surface-dark">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">La carta</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.03] tracking-[-0.02em]">
            Platos que repiten los que vuelven
          </h2>
          <p className="mt-5 text-[1.05rem] font-light leading-relaxed text-cream/60">
            Una selección de la carta de temporada. Cambiamos entre cinco y siete platos
            cada mes, según lo que dé la bahía y la huerta.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-x-16 gap-y-2 md:grid-cols-2">
          {dishes.map((d, i) => (
            <Reveal as="li" key={d.name} delay={(i % 2) * 90}>
              <div className="group border-b border-cream/12 py-7 transition-colors duration-300 hover:border-gold/50">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5">
                  <h3 className="min-w-0 text-xl leading-snug text-cream transition-colors duration-300 group-hover:text-gold">
                    {d.name}
                  </h3>
                  <span className="shrink-0 font-display text-lg text-gold">{d.price}</span>
                </div>
                <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-cream/55">
                  {d.desc}
                </p>
                <span className="mt-3 inline-block text-[0.6rem] uppercase tracking-[0.28em] text-cream/35">
                  {d.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
