import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const stats = [
  { value: "R$ 847", label: "Valor médio de multas graves no Brasil" },
  { value: "68%", label: "Motoristas que pagam sem questionar" },
  { value: "R$ 49,90", label: "Custo do recurso completo no Recurso.AI" },
  { value: "5 min", label: "Tempo médio para gerar seu recurso" },
];

const Stats = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="bg-accent text-accent-foreground py-12">
      <div ref={ref} className="container fade-in-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="text-3xl md:text-4xl font-extrabold mb-1">{s.value}</p>
              <p className="text-sm opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
