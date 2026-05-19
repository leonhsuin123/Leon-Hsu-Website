import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import MusicCard from "@/components/MusicCard";
import { musicData } from "@/data/music";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Music() {
  const { t } = useTranslation();
  
  const featured = musicData.filter(m => m.section === 'featured');
  const recordings = musicData.filter(m => m.section === 'recordings');
  const upcoming = musicData.filter(m => m.section === 'upcoming');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen pb-24">
      <PageHeader title={t('music.title')} />
      
      <div className="container mx-auto px-6 max-w-6xl space-y-32">
        
        {/* Featured Section */}
        {featured.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 pb-4 border-b border-border/50 text-foreground">
              {t('music.featured')}
            </h2>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featured.map(music => (
                <motion.div key={music.id} variants={item}>
                  <MusicCard item={music} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Recordings Section */}
        {recordings.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 pb-4 border-b border-border/50 text-foreground">
              {t('music.recordings')}
            </h2>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recordings.map(music => (
                <motion.div key={music.id} variants={item}>
                  <MusicCard item={music} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Upcoming Section */}
        {upcoming.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 pb-4 border-b border-border/50 text-foreground opacity-80">
              {t('music.upcoming')}
            </h2>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80"
            >
              {upcoming.map(music => (
                <motion.div key={music.id} variants={item}>
                  <MusicCard item={music} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}
        
      </div>
    </div>
  );
}
