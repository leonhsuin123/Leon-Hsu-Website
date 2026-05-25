import { useTranslation } from "@/contexts/TranslationContext";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { useLocation } from "wouter";

export default function Footer() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const isHome = location === "/" || location === "/Leon-Hsu-Website/";

  return (
    <footer
      className={`relative border-t border-border/40 ${
        isHome
          ? "bg-gradient-to-t from-background via-background/95 to-background/20 pt-20 pb-8"
          : "bg-background py-8"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex items-center space-x-6">
          <a href="https://www.instagram.com/leonhsumusic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/share/1XtTDaSJeD/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.youtube.com/@claudiayin123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <FaYoutube size={20} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide">
          &copy; {new Date().getFullYear()} Leon Hsu. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
