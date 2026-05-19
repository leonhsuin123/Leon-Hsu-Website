import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import MusicCard from "@/components/MusicCard";
import { musicData } from "@/data/music";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Music() {
  const { t } = useTranslation();

  const releases = musicData.filter(m => m.section === 'releases');
  const featuredOn = musicData.filter(m => m.section === 'featured_on');
  const upcoming = musicData.filter(m => m.section === 'upcoming');

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen pb-24">
      <PageHeader title={t('music.title')} />

      <div className="container mx-auto px-6 max-w-6xl space-y-24">

        {/* Releases — always shown, "Coming Soon" if empty */}
        <section>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 pb-4 border-b border-border/50 text-foreground">
            Releases
          </h2>
          {releases.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {releases.map(music => (
                <motion.div key={music.id} variants={item}>
                  <MusicCard item={music} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-muted-foreground text-base italic py-4">Coming Soon</p>
          )}
        </section>

        {/* Featured On — always shown if there is data */}
        {featuredOn.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 pb-4 border-b border-border/50 text-foreground">
              Featured On
            </h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {featuredOn.map(music => (
                <motion.div key={music.id} variants={item}>
                  <MusicCard item={music} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Upcoming Projects — hidden entirely if empty */}
        {upcoming.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 pb-4 border-b border-border/50 text-foreground opacity-80">
              Upcoming Projects
            </h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 opacity-80"
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
