import Logo from "./Logo";

const links = ["Como Funciona", "Planos", "Política de Privacidade", "Termos de Uso"];
const linkIds: Record<string, string> = {
  "Como Funciona": "#como-funciona",
  "Planos": "#planos",
};

const Footer = () => (
  <footer className="bg-accent text-accent-foreground py-12">
    <div className="container max-w-4xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <Logo white />
        <p className="text-accent-foreground/70 text-sm">Seu direito de defesa, simplificado por IA.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
        {links.map((l) => (
          <a
            key={l}
            href={linkIds[l] || "#"}
            className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
          >
            {l}
          </a>
        ))}
      </div>

      <hr className="border-accent-foreground/10 mb-8" />

      <p className="text-xs text-accent-foreground/50 text-center leading-relaxed max-w-2xl mx-auto">
        O Recurso.AI não é um escritório de advocacia. Os recursos são gerados por IA com base na
        legislação vigente e não substituem orientação jurídica profissional. © 2025 Recurso.AI
      </p>
    </div>
  </footer>
);

export default Footer;
