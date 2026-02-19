import { Lock, ClipboardCheck, ShieldCheck } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const testimonials = [
  {
    initial: "C",
    bg: "bg-primary",
    name: "Carlos M.",
    city: "São Paulo, SP",
    text: "Recebi uma multa de radar às 6h da manhã numa via sem sinalização adequada. Em 5 minutos o Recurso.AI gerou minha defesa. Não acreditei como foi simples.",
  },
  {
    initial: "A",
    bg: "bg-success",
    name: "Ana L.",
    city: "Belo Horizonte, MG",
    text: "Nunca soube que podia recorrer. Sempre paguei achando que não tinha jeito. Agora sei — e já usei duas vezes.",
  },
  {
    initial: "R",
    bg: "bg-warning",
    name: "Roberto F.",
    city: "Rio de Janeiro, RJ",
    text: "Paguei uma multa injusta no mês passado por falta de informação. Dessa vez eu recorri. O documento ficou muito melhor do que eu esperava por esse preço.",
  },
];

const seals = [
  { icon: Lock, label: "SSL Seguro" },
  { icon: ClipboardCheck, label: "Baseado no CTB" },
  { icon: ShieldCheck, label: "Documento com validade administrativa" },
];

const Testimonials = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="bg-secondary py-20">
      <div ref={ref} className="container max-w-4xl fade-in-section">
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-12">
          Motoristas que decidiram parar de aceitar
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${t.bg} text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-accent text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.city}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {seals.map((s) => (
            <span key={s.label} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <s.icon className="w-4 h-4" />
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
