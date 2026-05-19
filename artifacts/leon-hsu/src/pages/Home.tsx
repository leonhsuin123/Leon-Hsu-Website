import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="h-screen overflow-hidden">
      {/* Hero — fills exactly the viewport, nothing to scroll */}
      <section className="relative h-full flex items-center justify-center overflow-hidden">
        {/* Dark atmospheric background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-background to-background z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30 z-0" />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold tracking-tight text-foreground leading-none"
          >
            LEON HSU
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="h-[1px] w-24 bg-accent mt-8 origin-center"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="mt-6 text-base md:text-lg text-accent tracking-[0.35em] font-sans font-light uppercase"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </section>
    </div>
  );
}
