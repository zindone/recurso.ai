import { useState, type FormEvent } from "react";
import { Check, AlertTriangle, Loader2, Lock } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const infractions = [
  "Excesso de velocidade",
  "Estacionamento irregular",
  "Uso de celular",
  "Faixa exclusiva",
  "Avanço de sinal",
  "Outro",
];

const beliefs = [
  "Sim, tenho certeza",
  "Talvez",
  "Não tenho certeza",
];

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  infraction: string;
  description: string;
  belief: string;
  terms: boolean;
}

const initialForm: FormData = {
  name: "",
  email: "",
  whatsapp: "",
  infraction: "",
  description: "",
  belief: "",
  terms: false,
};

const FormSection = () => {
  const ref = useScrollFadeIn();
  const [form, setForm] = useState<FormData>(initialForm);
  const [phase, setPhase] = useState<"form" | "loading" | "result">("form");
  const [probability] = useState<"alta" | "media">(() =>
    Math.random() > 0.5 ? "alta" : "media"
  );

  const set = (key: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const isValid =
    form.name && form.email && form.whatsapp && form.infraction && form.description && form.belief && form.terms;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setPhase("loading");
    setTimeout(() => setPhase("result"), 2000);
  };

  const inputClass =
    "w-full border border-border rounded-lg px-4 py-3 text-sm text-accent bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";
  const selectClass = `${inputClass} appearance-none`;

  return (
    <section id="formulario" className="bg-gradient-to-br from-accent to-primary py-20">
      <div ref={ref} className="container max-w-xl fade-in-section">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-3">
            Faça seu diagnóstico agora. É grátis.
          </h2>
          <p className="text-accent-foreground/80">
            Preencha os dados abaixo e nossa IA analisa sua multa em instantes.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8">
          {phase === "form" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className={inputClass}
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                required
              />
              <input
                className={inputClass}
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                required
              />
              <input
                className={inputClass}
                placeholder="WhatsApp (com DDD)"
                value={form.whatsapp}
                onChange={(e) => set("whatsapp", e.target.value)}
                required
              />
              <select
                className={selectClass}
                value={form.infraction}
                onChange={(e) => set("infraction", e.target.value)}
                required
              >
                <option value="">Tipo de infração</option>
                {infractions.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
              <textarea
                className={`${inputClass} min-h-[100px] resize-none`}
                placeholder="Ex: Recebi uma multa de radar mas o limite de velocidade não estava sinalizado na via..."
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                required
              />
              <select
                className={selectClass}
                value={form.belief}
                onChange={(e) => set("belief", e.target.value)}
                required
              >
                <option value="">Você acredita que a multa é injusta?</option>
                {beliefs.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>

              <label className="flex items-start gap-2 cursor-pointer text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={form.terms}
                  onChange={(e) => set("terms", e.target.checked)}
                  className="mt-1 accent-primary"
                  required
                />
                Li e concordo com os Termos de Uso e Política de Privacidade
              </label>

              <button
                type="submit"
                disabled={!isValid}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🔍 Analisar minha multa gratuitamente
              </button>

              <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Seus dados estão protegidos. Não fazemos spam.
              </p>
            </form>
          )}

          {phase === "loading" && (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <Loader2 className="w-10 h-10 text-primary animate-spin-slow" />
              <p className="text-accent font-semibold">🤖 Nossa IA está analisando seu caso...</p>
            </div>
          )}

          {phase === "result" && (
            <div className="text-center space-y-5">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-success" />
              </div>

              <h3 className="text-xl font-bold text-accent">Diagnóstico concluído!</h3>

              <span
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                  probability === "alta"
                    ? "bg-success/10 text-success"
                    : "bg-warning/10 text-warning"
                }`}
              >
                {probability === "alta"
                  ? "Alta probabilidade de deferimento"
                  : "Probabilidade moderada de deferimento"}
              </span>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Nossa IA identificou pontos que podem ser contestados administrativamente no seu caso.
                Para exercer seu direito de defesa, gere agora o recurso completo.
              </p>

              <ul className="space-y-2 text-left max-w-sm mx-auto">
                {[
                  "Verificar regularidade formal do auto de infração",
                  "Analisar prazo de notificação ao condutor",
                  "Identificar inconsistências na descrição da infração",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-accent">
                    <AlertTriangle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="border-border" />

              <div>
                <h4 className="font-semibold text-accent mb-1">Quer o recurso completo?</h4>
                <p className="text-3xl font-extrabold text-accent mb-4">R$ 49,90</p>
                <button className="w-full bg-success text-success-foreground py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  ✅ Gerar meu recurso agora
                </button>
                <p className="text-xs text-muted-foreground mt-3">
                  Documento em PDF • Pronto para protocolar • Suporte por WhatsApp
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;
