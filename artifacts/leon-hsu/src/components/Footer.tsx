import { useTranslation } from "@/contexts/TranslationContext";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="w-full border-t border-border/30 bg-background/50 py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-serif tracking-wider mb-2">LEON HSU</h2>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Leon Hsu. {t('footer.rights')}
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
            <FaYoutube size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
