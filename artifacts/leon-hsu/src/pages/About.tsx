import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { useTranslation } from "@/contexts/TranslationContext";

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Leon Hsu | About";
  }, []);
  
  return (
    <div className="min-h-screen">
      <PageHeader title={t('about.title')} />
      
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-5/12 aspect-[4/5] bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-lg overflow-hidden border border-border/50 relative shadow-2xl"
            >
              {/* Placeholder artist image */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="font-serif text-2xl tracking-widest rotate-[-90deg]">LEON HSU</span>
              </div>
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-foreground"
            >
              {/* // TODO: Connect Google Docs API for bio content */}
              <h2 className="mb-6 text-foreground font-serif">
                <em>{t('about.bio10')}</em> {t('about.bio11')}
              </h2>

              <p>{t('about.bio2')}</p>

              <p>{t('about.bio3')}</p>

              <p>{t('about.bio4')}</p>

              <p>{t('about.bio5')}</p>
              
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
