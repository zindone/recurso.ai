import { Check } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const guarantees = [
  "Diagnóstico 100% gratuito",
  "Sem advogado",
  "Pronto em menos de 5 minutos",
];

const Hero = () => {
  const ref = useScrollFadeIn();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-card to-secondary py-20 md:py-28">
      <div ref={ref} className="container max-w-3xl text-center fade-in-section">
        <span className="inline-block bg-destructive/10 text-destructive text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          🚨 Mais de 90 mil multas contestadas por ano no Brasil
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent leading-tight mb-6">
          Você não é obrigado a pagar uma multa injusta.
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Milhões de motoristas pagam multas erradas todo ano por não saberem como recorrer.
          A burocracia é real — mas agora existe uma saída simples, rápida e barata.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={() => scrollTo("formulario")}
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Fazer diagnóstico grátis
          </button>
          <button
            onClick={() => scrollTo("como-funciona")}
            className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-base hover:bg-primary/5 transition-colors w-full sm:w-auto"
          >
            Ver como funciona
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {guarantees.map((g) => (
            <span key={g} className="flex items-center gap-2 text-sm font-medium text-accent">
              <Check className="w-4 h-4 text-success" />
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
