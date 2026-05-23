import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { X } from "lucide-react";
import { MusicItem } from "@/data/music";
import { Button } from "./ui/button";

export default function MusicCard({ item }: { item: MusicItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumb View */}
      <motion.div 
        layoutId={`card-${item.id}`}
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer relative rounded-md overflow-hidden bg-card border border-border/50 hover:border-accent/50 transition-colors flex flex-col"
        whileHover={{ y: -5 }}
      >
        <motion.div layoutId={`image-${item.id}`} className="aspect-square bg-gradient-to-br from-zinc-800 to-black w-full flex items-center justify-center p-6 text-center">
          <span className="font-serif text-xl tracking-wider text-white/50 group-hover:text-white/80 transition-colors">{item.title}</span>
        </motion.div>
        
        <motion.div layoutId={`content-${item.id}`} className="p-5 flex-1 flex flex-col">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-accent mb-3">{item.artist} &bull; {item.year}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        </motion.div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div 
                layoutId={`card-${item.id}`}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-lg border border-border shadow-2xl pointer-events-auto flex flex-col md:flex-row"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-muted-foreground hover:text-foreground z-10 bg-black/20 p-2 rounded-full backdrop-blur-md"
                >
                  <X size={24} />
                </button>

                <motion.div layoutId={`image-${item.id}`} className="w-full md:w-1/2 aspect-square md:aspect-auto bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center p-10 text-center relative">
                   <span className="font-serif text-3xl md:text-4xl tracking-wider text-white/80">{item.title}</span>
                </motion.div>

                <motion.div layoutId={`content-${item.id}`} className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">{item.title}</h2>
                  <p className="text-lg text-accent mb-6">{item.artist} &bull; {item.year}</p>
                  
                  <div className="h-[1px] w-12 bg-border mb-6" />
                  
                  <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-4 w-full">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start hover:bg-green-600 hover:text-black transition-colors hover:border-green-600"
                      size="lg"
                    >
                      <a href={item.spotify} target="_blank" rel="noopener noreferrer">
                      <FaSpotify className="mr-3" size={20} /> Listen on Spotify
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start hover:bg-white hover:text-black transition-colors"
                      size="lg"
                    >
                      <a href={item.applemusic} target="_blank" rel="noopener noreferrer">
                      <FaApple className="mr-3" size={20} /> Listen on Apple Music
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start hover:bg-red-600 hover:text-white transition-colors hover:border-red-600"
                      size="lg"
                    >
                      <a href={item.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="mr-3" size={20} /> Watch on YouTube
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
