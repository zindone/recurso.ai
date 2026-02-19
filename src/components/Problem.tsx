import { Car, FileText, DollarSign } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const cards = [
  {
    icon: Car,
    title: "Multa que não faz sentido",
    desc: "Você tem certeza que não cometeu a infração, mas o auto chegou assim mesmo.",
  },
  {
    icon: FileText,
    title: "Tentou recorrer e desistiu",
    desc: "O processo parece tão burocrático que pagar parece mais fácil do que lutar.",
  },
  {
    icon: DollarSign,
    title: "Pagou achando que não tinha saída",
    desc: "Não tinha informação, não tinha tempo, não sabia por onde começar.",
  },
];

const Problem = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="problema" className="bg-secondary py-20">
      <div ref={ref} className="container max-w-4xl fade-in-section">
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-3">
          Isso já aconteceu com você?
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Se sim, você não está sozinho — e tem direito de reagir.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <c.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-accent text-lg mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-primary font-bold text-lg mt-12">
          O Recurso.AI existe para mudar esse ciclo.
        </p>
      </div>
    </section>
  );
};

export default Problem;
