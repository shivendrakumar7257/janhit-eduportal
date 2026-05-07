import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap, Sun, Moon, Search } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/institutions", label: "Institutions" },
  { to: "/courses", label: "Courses" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="container-tight flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="size-10 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
            <GraduationCap className="size-5 text-gold-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-foreground">Janhit</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Group of Institutions
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden md:grid place-items-center size-9 rounded-lg hover:bg-accent transition"
          >
            <Search className="size-4" />
          </button>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
            className="grid place-items-center size-9 rounded-lg hover:bg-accent transition"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/admissions"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-gold text-gold-foreground text-sm font-semibold shadow-gold hover:scale-[1.03] transition"
          >
            Apply Now
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center size-9 rounded-lg hover:bg-accent"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden container-tight mt-2">
          <div className="bg-background border shadow-xl rounded-2xl p-3 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
