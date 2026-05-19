import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { useTranslation } from "@/contexts/TranslationContext";

export default function About() {
  const { t } = useTranslation();

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
              <h2 className="text-3xl mb-6 text-foreground font-serif">A Voice Rooted in Tradition, Looking to the Future.</h2>
              
              <p>
                Leon Hsu is an award-winning jazz pianist, composer, and educator whose work bridges the profound depths of the jazz tradition with a distinctly modern harmonic vocabulary. Known for his sensitive touch and rhythmic vitality, Leon creates soundscapes that are both intimate and expansive, inviting listeners into a world of deep emotional resonance.
              </p>
              
              <p>
                A graduate of a prestigious conservatory, his early years were steeped in the rigorous study of classical repertoire before a transformative encounter with the recordings of Bill Evans and Thelonious Monk redirected his musical path. This dual foundation is evident in his playing—marked by a crystalline tone, contrapuntal elegance, and an unwavering commitment to the groove.
              </p>
              
              <p>
                As a performer, Leon has led his trio across renowned stages globally, performing in intimate clubs and major festivals alike. His compositions often draw inspiration from the quiet, unseen moments of urban life—the spaces between conversations, the late-night quiet of a bustling city, and the shifting of seasons.
              </p>
              
              <p>
                Beyond the stage, Leon is a passionate educator, dedicated to mentoring the next generation of improvisers. He believes that jazz is not just a genre, but a language—one that requires deep listening, rigorous study, and ultimately, the courage to speak one's own truth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
