import { Search, Bot, BarChart3, ClipboardList, AlertTriangle, ChevronRight } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const steps = [
  {
    icon: Search,
    title: "Descreva sua multa",
    desc: "Informe os dados do auto de infração e conte o que aconteceu. Leva menos de 2 minutos.",
  },
  {
    icon: Bot,
    title: "A IA analisa",
    desc: "Nossa inteligência artificial identifica inconsistências, erros formais e argumentos de defesa com base no CTB.",
  },
  {
    icon: BarChart3,
    title: "Você recebe o diagnóstico",
    desc: "Grátis. Com a probabilidade de sucesso e a estratégia de defesa mais adequada para o seu caso.",
  },
  {
    icon: ClipboardList,
    title: "Recurso gerado e pronto",
    desc: "Se quiser prosseguir, geramos o documento completo em PDF, fundamentado e pronto para protocolar.",
  },
];

const HowItWorks = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="como-funciona" className="bg-card py-20">
      <div ref={ref} className="container max-w-5xl fade-in-section">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            ⚖️ Fundamentado no CTB e normas do CONTRAN
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-3">
            Como o Recurso.AI funciona
          </h2>
          <p className="text-muted-foreground text-lg">Da multa ao recurso em 4 etapas simples.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary mb-1">Etapa {i + 1}</span>
              <h3 className="font-semibold text-accent mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden md:block absolute -right-3 top-6 w-6 h-6 text-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-4 border-primary bg-primary/5 rounded-r-lg p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-warning mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-accent">Aviso:</strong> O Recurso.AI não é um escritório de advocacia.
            Os recursos são gerados por IA com base na legislação vigente e não substituem orientação
            jurídica profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
