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

  // Close mobile menu on route change
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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border/50 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo - Left */}
        <div className="flex-1 -ml-1">
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-wider hover:text-accent transition-colors whitespace-nowrap">
            LEON HSU
          </Link>
        </div>

        {/* Desktop Nav - Center */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-accent relative",
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

        {/* Socials & Translate - Right */}
        <div className="hidden md:flex flex-1 justify-end items-center pl-12">
          <div className="flex items-center space-x-3">
            <a href="https://www.instagram.com/leonhsumusic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <FaInstagram size={17} />
            </a>
            <a href="https://www.facebook.com/share/1XtTDaSJeD/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <FaFacebookF size={17} />
            </a>
            <a href="https://www.youtube.com/@claudiayin123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <FaYoutube size={17} />
            </a>
            
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end">
          <button 
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
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
          
          <div className="flex items-center space-x-6 pt-4 border-t border-border/50">
            <a href="https://www.instagram.com/leonhsumusic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/1XtTDaSJeD/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.youtube.com/@claudiayin123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
              <FaYoutube size={20} />
            </a>
          </div>

          <Button 
            variant="outline" 
            className="w-full justify-center mt-4 border-border/50"
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
