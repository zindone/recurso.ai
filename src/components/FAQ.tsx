import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const faqs = [
  {
    q: "O recurso gerado pela IA tem validade jurídica?",
    a: "Sim. O documento segue o formato administrativo exigido pelos órgãos autuadores brasileiros e é fundamentado no CTB e nas resoluções do CONTRAN.",
  },
  {
    q: "Em quais instâncias posso recorrer?",
    a: "Existem três instâncias: Defesa Prévia (antes da autuação), JARI (1ª instância administrativa) e CETRAN (2ª instância). O Recurso.AI orienta qual é a mais adequada para o seu caso.",
  },
  {
    q: "O Recurso.AI garante que vou ganhar?",
    a: "Não. Nenhum serviço pode garantir resultado em processos administrativos. Nosso papel é maximizar sua chance de sucesso com a melhor argumentação possível baseada na legislação vigente.",
  },
  {
    q: "E se meu recurso for indeferido?",
    a: "Orientamos sobre as próximas etapas e instâncias disponíveis. Em casos mais complexos, recomendamos consulta com advogado especializado.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Utilizamos criptografia SSL e seus dados são tratados conforme a LGPD — Lei Geral de Proteção de Dados.",
  },
];

const FAQ = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="bg-secondary py-20">
      <div ref={ref} className="container max-w-2xl fade-in-section">
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-10">
          Dúvidas frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-xl border border-border px-5"
            >
              <AccordionTrigger className="text-left text-accent font-semibold text-sm hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
