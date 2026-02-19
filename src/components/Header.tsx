import Logo from "./Logo";

const Header = () => {
  const scrollTo = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
  );
};

export default Header;
