import { useState, useEffect } from "react";
import Logo from "./Logo";

const Header = () => {
  const [showFixedCTA, setShowFixedCTA] = useState(false);

  const scrollTo = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const formulario = document.getElementById("formulario");
      if (formulario) {
        const formularioTop = formulario.getBoundingClientRect().top;
        // Mostra o botão fixo quando rolar mais de 300px e não estiver no formulário
        setShowFixedCTA(window.scrollY > 300 && formularioTop > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <Logo />
          <button
            onClick={scrollTo}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Diagnóstico Grátis
          </button>
        </div>
      </header>

      {/* Botão CTA Fixo para Mobile */}
      <button
        onClick={scrollTo}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold shadow-2xl hover:opacity-90 transition-all duration-300 md:hidden ${
          showFixedCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
        }`}
      >
        📋 Fazer Diagnóstico Grátis
      </button>
    </>
  );
};

export default Header;
