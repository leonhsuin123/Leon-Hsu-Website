import { useTranslation } from "@/contexts/TranslationContext";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border/30 bg-background py-10">
      <div className="flex flex-col items-center gap-4">
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
