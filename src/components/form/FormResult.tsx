import { Check, AlertTriangle } from "lucide-react";
import type { FormData } from "../FormSection";

interface Props {
  form: FormData;
  onReset: () => void;
}

const beliefConfig = {
  "Sim, tenho certeza": {
    badge: "✅ Alta probabilidade de deferimento",
    color: "bg-success/10 text-success",
    text: "Seu relato indica características fortes para contestação administrativa.",
  },
  "Talvez": {
    badge: "⚠️ Probabilidade moderada de deferimento",
    color: "bg-warning/10 text-warning",
    text: "Seu caso tem pontos contestáveis que merecem análise mais detalhada.",
  },
  "Não tenho certeza": {
    badge: "🔍 Caso requer análise aprofundada",
    color: "bg-warning/10 text-warning",
    text: "Mesmo sem certeza, existem argumentos administrativos que podem ser explorados.",
  },
} as const;

const points = [
  "Verificação da regularidade formal do auto de infração",
  "Análise do prazo de notificação ao condutor",
  "Identificação de inconsistências na descrição da infração",
];

const offerItems = [
  "Documento de recurso em PDF",
  "Fundamentação jurídica personalizada",
  "Instrução de protocolo passo a passo",
  "Suporte direto pelo WhatsApp",
  "Orientação sobre prazo e instância correta",
];

const FormResult = ({ form, onReset }: Props) => {
  const config = beliefConfig[form.belief as keyof typeof beliefConfig] ?? beliefConfig["Talvez"];

  const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(
    `Olá! Fiz o diagnóstico no Recurso.AI e quero gerar meu recurso completo. Meu nome é ${form.name} e recebi uma multa de ${form.infraction}.`
  )}`;

  return (
    <div className="animate-fade-in space-y-6 max-w-[560px] mx-auto">
      {/* BLOCO 1 */}
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-xl font-bold text-accent">Diagnóstico concluído, {form.name}!</h3>
        <p className="text-sm text-muted-foreground">Nossa IA analisou seu caso com base no CTB e nas resoluções do CONTRAN.</p>
      </div>

      {/* BLOCO 2 */}
      <div className="text-center space-y-2">
        <span className={`inline-block px-5 py-2 rounded-full text-sm font-semibold animate-pulse ${config.color}`}>
          {config.badge}
        </span>
        <p className="text-sm text-muted-foreground">{config.text}</p>
      </div>

      {/* BLOCO 3 */}
      <div className="space-y-3">
        <h4 className="font-semibold text-accent text-sm">📋 O que identificamos no seu caso</h4>
        <ul className="space-y-2">
          {points.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-accent animate-fade-in"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
            >
              <AlertTriangle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">
          Estes são os principais argumentos que um recurso administrativo bem fundamentado deve abordar.
        </p>
      </div>

      {/* BLOCO 4 */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground text-center whitespace-nowrap">
          Para exercer seu direito, você precisa do recurso completo
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* BLOCO 5 */}
      <div className="bg-accent text-accent-foreground rounded-xl p-6 space-y-4">
        <div>
          <h4 className="font-bold text-lg">Recurso Completo</h4>
          <p className="text-accent-foreground/70 text-sm">Documento pronto para protocolar</p>
        </div>
        <ul className="space-y-2">
          {offerItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-success shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="text-center space-y-1">
          <p className="text-sm line-through text-accent-foreground/50">Advogado: R$ 300–800</p>
          <p className="text-3xl font-extrabold">R$ 49,90</p>
          <p className="text-xs text-accent-foreground/60">pagamento único • sem mensalidade</p>
        </div>
      </div>

      {/* BLOCO 6 */}
      <div className="space-y-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white text-base shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          💬 Falar com especialista no WhatsApp
        </a>
        <p className="text-center text-xs text-muted-foreground">🔒 Atendimento humano • Resposta em até 1h</p>
      </div>

      {/* BLOCO 7 */}
      <div className="bg-secondary rounded-lg p-4 text-center space-y-2">
        <p className="text-xs text-muted-foreground">
          ⚠️ O Recurso.AI não é um escritório de advocacia. Os recursos são gerados com base na legislação vigente e não substituem orientação jurídica profissional.
        </p>
        <button onClick={onReset} className="text-xs text-primary hover:underline font-medium">
          ← Fazer novo diagnóstico
        </button>
      </div>
    </div>
  );
};

export default FormResult;
