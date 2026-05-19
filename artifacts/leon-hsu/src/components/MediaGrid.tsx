import { MediaItem } from "@/data/media";
import { motion } from "framer-motion";

interface MediaGridProps {
  media: MediaItem[];
}

export default function MediaGrid({ media }: MediaGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8">
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
          <div className="relative w-full aspect-video rounded-md overflow-hidden bg-zinc-900 border border-border/50 mb-3 shadow-xl">
            <iframe
              src={item.embedUrl}
              title={item.title}
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="font-sans text-sm text-foreground/80 group-hover:text-accent transition-colors leading-snug">{item.title}</p>
        </motion.div>
      ))}
    </div>
  );
}
