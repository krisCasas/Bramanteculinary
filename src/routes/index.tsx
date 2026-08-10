import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Menu } from "@/components/landing/Menu";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { Visit } from "@/components/landing/Visit";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bramante · Cocina mediterránea al fuego en Puerto Aldea" },
      {
        name: "description",
        content:
          "Bramante: brasa lenta, pesca de bahía y vinos naturales frente al muelle viejo de Puerto Aldea. Reservá tu mesa.",
      },
      { property: "og:title", content: "Bramante · Cocina mediterránea al fuego" },
      {
        property: "og:description",
        content:
          "Brasa lenta, producto de la bahía y aceite nuevo. Restaurante mediterráneo en Puerto Aldea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Visit />
      </main>
      <SiteFooter />

      <a
        href="#reservar"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-warm)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_20px_45px_-18px_var(--primary)]"
      >
        Reservar
      </a>
    </div>
  );
}
