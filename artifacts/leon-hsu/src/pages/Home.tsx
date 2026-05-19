import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import MusicCard from "@/components/MusicCard";
import EventCard from "@/components/EventCard";
import { musicData } from "@/data/music";
import { eventsData } from "@/data/events";

export default function Home() {
  const { t } = useTranslation();
  
  const latestRelease = musicData.find(m => m.section === 'featured') || musicData[0];
  const upcomingEvents = eventsData.filter(e => !e.isPast).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/95 z-0" />
        
        {/* Abstract dark atmospheric background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-background to-background z-0" />
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight text-foreground"
          >
            LEON HSU
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-6 text-xl md:text-2xl text-accent tracking-widest font-light uppercase"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-12"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105">
                {t('hero.book')}
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
        >
          <ChevronDown size={32} className="text-muted-foreground/50" />
        </motion.div>
      </section>

      {/* Latest Release */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">{t('home.latest_release')}</h2>
              <div className="h-[1px] w-20 bg-accent mt-6" />
            </div>
            <Link href="/music" className="mt-4 md:mt-0 text-accent hover:text-foreground transition-colors font-medium">
              View all music &rarr;
            </Link>
          </motion.div>
          
          <div className="max-w-2xl">
            <MusicCard item={latestRelease} />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 md:py-32 px-6 bg-card/30 border-y border-border/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">{t('home.upcoming_events')}</h2>
              <div className="h-[1px] w-20 bg-accent mt-6" />
            </div>
            <Link href="/events" className="mt-4 md:mt-0 text-accent hover:text-foreground transition-colors font-medium">
              View all events &rarr;
            </Link>
          </motion.div>
          
          <div className="flex flex-col">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Book CTA */}
      <section className="py-32 px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to bring the music?</h2>
        <Link href="/contact">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 py-8 text-xl font-medium transition-all hover:scale-105">
            Get in Touch
          </Button>
        </Link>
      </section>
    </div>
  );
}
