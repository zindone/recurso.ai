interface LogoProps {
  white?: boolean;
}

const Logo = ({ white = false }: LogoProps) => (
  <a href="#" className="flex items-center gap-2">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 2L6 8V20C6 27.18 11.12 33.82 18 35C24.88 33.82 30 27.18 30 20V8L18 2Z"
        fill="hsl(var(--primary))"
      />
      <text
        x="18" y="23"
        textAnchor="middle"
        fill="white"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="16"
      >
        R
      </text>
    </svg>
    <span className={`text-xl font-bold tracking-tight ${white ? "text-primary-foreground" : "text-accent"}`}>
      Recurso<span className="text-primary">.AI</span>
    </span>
  </a>
);

export default Logo;
