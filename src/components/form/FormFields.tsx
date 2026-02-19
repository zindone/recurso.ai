import type { FormEvent } from "react";
import { Lock } from "lucide-react";
import type { FormData } from "../FormSection";

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

interface Props {
  form: FormData;
  set: (key: keyof FormData, value: string | boolean) => void;
  isValid: boolean;
  onSubmit: (e: FormEvent) => void;
}

const FormFields = ({ form, set, isValid, onSubmit }: Props) => {
  const inputClass =
    "w-full border border-border rounded-lg px-4 py-3 text-sm text-accent bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";
  const selectClass = `${inputClass} appearance-none`;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input className={inputClass} placeholder="Seu nome" value={form.name} onChange={(e) => set("name", e.target.value)} required />
      <input className={inputClass} type="email" placeholder="Seu e-mail" value={form.email} onChange={(e) => set("email", e.target.value)} required />
      <input className={inputClass} placeholder="WhatsApp (com DDD)" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} required />
      <select className={selectClass} value={form.infraction} onChange={(e) => set("infraction", e.target.value)} required>
        <option value="">Tipo de infração</option>
        {infractions.map((i) => <option key={i} value={i}>{i}</option>)}
      </select>
      <textarea
        className={`${inputClass} min-h-[100px] resize-none`}
        placeholder="Ex: Recebi uma multa de radar mas o limite de velocidade não estava sinalizado na via..."
        value={form.description}
        onChange={(e) => set("description", e.target.value)}
        required
      />
      <select className={selectClass} value={form.belief} onChange={(e) => set("belief", e.target.value)} required>
        <option value="">Você acredita que a multa é injusta?</option>
        {beliefs.map((b) => <option key={b} value={b}>{b}</option>)}
      </select>
      <label className="flex items-start gap-2 cursor-pointer text-sm text-muted-foreground">
        <input type="checkbox" checked={form.terms} onChange={(e) => set("terms", e.target.checked)} className="mt-1 accent-primary" required />
        Li e concordo com os Termos de Uso e Política de Privacidade
      </label>
      <button type="submit" disabled={!isValid} className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
        🔍 Analisar minha multa gratuitamente
      </button>
      <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
        <Lock className="w-3 h-3" /> Seus dados estão protegidos. Não fazemos spam.
      </p>
    </form>
  );
};

export default FormFields;
