import { MediaItem } from "@/data/media";
import { motion } from "framer-motion";

interface MediaGridProps {
  media: MediaItem[];
}

export default function MediaGrid({ media }: MediaGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* // TODO: Connect Google Docs API for video list */}
      {media.map((item, index) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex flex-col group"
        >
          <div className="relative w-full aspect-video rounded-md overflow-hidden bg-zinc-900 border border-border/50 mb-4 shadow-xl">
            <iframe 
              src={item.embedUrl} 
              title={item.title}
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
          <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
        </motion.div>
      ))}
    </div>
  );
}
