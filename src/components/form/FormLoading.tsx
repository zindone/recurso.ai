import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const steps = [
  "Verificando o auto de infração...",
  "Consultando o CTB e resoluções CONTRAN...",
  "Identificando pontos contestáveis...",
  "Calculando probabilidade de deferimento...",
];

const FormLoading = () => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 3000;
    const frame = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (stepIndex >= steps.length - 1) return;
    const t = setTimeout(() => setStepIndex((i) => i + 1), 1000);
    return () => clearTimeout(t);
  }, [stepIndex]);

  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6 animate-fade-in">
      <div className="relative">
        <Shield className="w-14 h-14 text-primary animate-pulse" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold text-accent">🤖 Analisando sua multa...</p>
        <p className="text-sm text-muted-foreground">
          Nossa IA está verificando os pontos contestáveis do seu caso. Isso leva alguns segundos.
        </p>
      </div>
      <div className="w-full max-w-xs">
        <Progress value={progress} className="h-2" />
      </div>
      <p className="text-sm text-primary font-medium min-h-[20px] transition-opacity duration-300">
        {steps[stepIndex]}
      </p>
    </div>
  );
};

export default FormLoading;
