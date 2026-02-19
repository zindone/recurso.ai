import { Check } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const free = [
  "Análise da sua multa pelo time júridico",
  "Probabilidade de sucesso",
  "Estratégia de defesa recomendada",
  "Prazo legal para recurso",
];

const paid = [
  "Tudo do diagnóstico",
  "Documento de recurso em PDF",
  "Fundamentação jurídica personalizada",
  "Instrução de protocolo passo a passo",
  "Suporte por WhatsApp",
];

const Pricing = () => {
  const ref = useScrollFadeIn();

  const scrollTo = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="planos" className="bg-card py-20">
      <div ref={ref} className="container max-w-3xl fade-in-section">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-3">
            Preço transparente. Sem surpresas.
          </h2>
          <p className="text-muted-foreground text-lg">
            Comece grátis. Pague só se quiser o recurso completo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free plan */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-secondary p-6">
              <h3 className="font-bold text-accent text-lg">Diagnóstico</h3>
              <div className="mt-2">
                <span className="text-4xl font-extrabold text-accent">R$ 0</span>
                <span className="text-muted-foreground text-sm ml-2">para sempre grátis</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {free.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-accent">
                    <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollTo}
                className="w-full border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors"
              >
                Fazer diagnóstico grátis
              </button>
            </div>
          </div>

          {/* Paid plan */}
          <div className="rounded-xl overflow-hidden border-2 border-primary relative">
            <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              Mais escolhido
            </span>
            <div className="bg-accent p-6">
              <h3 className="font-bold text-accent-foreground text-lg">Recurso Completo</h3>
              <div className="mt-2">
                <span className="text-4xl font-extrabold text-accent-foreground">R$ 49,90</span>
                <span className="text-accent-foreground/70 text-sm ml-2">por recurso</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {paid.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-accent">
                    <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollTo}
                className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Gerar meu recurso
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          💡 Advogados cobram entre R$ 300 e R$ 800 pelo mesmo serviço.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
