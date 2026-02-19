import { useState, type FormEvent } from "react";
import FormFields from "./form/FormFields";
import FormLoading from "./form/FormLoading";
import FormResult from "./form/FormResult";

export interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  infraction: string;
  description: string;
  belief: string;
  terms: boolean;
}

export const initialForm: FormData = {
  name: "",
  email: "",
  whatsapp: "",
  infraction: "",
  description: "",
  belief: "",
  terms: false,
};

const FormSection = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [phase, setPhase] = useState<"form" | "loading" | "result">("form");

  const set = (key: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const isValid =
    form.name && form.email && form.whatsapp && form.infraction && form.description && form.belief && form.terms;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setPhase("loading");
    setTimeout(() => setPhase("result"), 4000);
  };

  const handleReset = () => {
    setForm(initialForm);
    setPhase("form");
  };

  return (
    <section id="formulario" className="bg-gradient-to-br from-accent to-primary py-20">
      <div className="container max-w-xl mx-auto px-4">
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
            <FormFields form={form} set={set} isValid={!!isValid} onSubmit={handleSubmit} />
          )}
          {phase === "loading" && <FormLoading />}
          {phase === "result" && <FormResult form={form} onReset={handleReset} />}
        </div>
      </div>
    </section>
  );
};

export default FormSection;
