import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { useTranslation } from "@/contexts/TranslationContext";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const { t, toggle, language } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/music", label: t('nav.music') },
    { href: "/media", label: t('nav.media') },
    { href: "/events", label: t('nav.events') },
    { href: "/contact", label: t('nav.contact') },
  ];

  const socialLinks = (
    <>
      <a href="https://www.instagram.com/leonhsumusic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
        <FaInstagram size={17} />
      </a>
      <a href="https://www.facebook.com/share/1XtTDaSJeD/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
        <FaFacebookF size={17} />
      </a>
      <a href="https://www.youtube.com/@claudiayin123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
        <FaYoutube size={17} />
      </a>
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      {/* ── DESKTOP header ────────────────────────────────────────────── */}
      {/* flex-1 on both logo and socials = equal gaps on each side of nav */}
      <div className="hidden md:flex w-full px-10 items-center">

        {/* Logo – left, flex-1 so its free space equals the right side */}
        <div className="flex-1">
          <Link href="/" className="nav-logo hover:text-accent transition-colors whitespace-nowrap">
            LEON HSU
          </Link>
        </div>

        {/* Nav – centered, fixed width */}
        <nav className="flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium tracking-wide transition-colors hover:text-accent relative",
                location === link.href ? "text-accent" : "text-muted-foreground"
              )}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent opacity-50" />
              )}
            </Link>
          ))}
        </nav>

        {/* Socials + Translate – flex-1 right, mirrors the logo's flex-1 */}
        <div className="flex-1 flex justify-end items-center">
          <div className="flex items-center space-x-5">
            {socialLinks}
            <div className="w-[1px] h-4 bg-border mx-1" />
            <button
              onClick={toggle}
              className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe size={15} />
              <span className="uppercase">{language === 'en' ? 'EN' : '中文'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE header ─────────────────────────────────────────────── */}
      {/* Three zones: logo left | socials center | hamburger right */}
      <div className="flex md:hidden w-full px-4 items-center">

        {/* Logo – left */}
        <div className="flex-none">
          <Link href="/" className="nav-logo hover:text-accent transition-colors whitespace-nowrap">
            LEON HSU
          </Link>
        </div>

        {/* Socials – centered (flex-1 + justify-center) */}
        <div className="flex-1 flex justify-center items-center space-x-5">
          {socialLinks}
        </div>

        {/* Hamburger – right */}
        <div className="flex-none">
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — nav links + translate only, no socials */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 py-6 px-6 flex flex-col space-y-6 md:hidden shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium",
                  location === link.href ? "text-accent" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="outline"
            className="w-full justify-center border-border/50"
            onClick={toggle}
          >
            <Globe className="mr-2 h-4 w-4" />
            Switch to {language === 'en' ? '中文' : 'English'}
          </Button>
        </div>
      )}
    </header>
  );
}
