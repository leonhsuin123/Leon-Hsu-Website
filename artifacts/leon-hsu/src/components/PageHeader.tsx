import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-12 md:pt-40 md:pb-20 flex flex-col items-center justify-center text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-6xl font-serif font-semibold tracking-tight mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        className="h-[1px] w-24 bg-accent mt-8"
      />
    </div>
  );
}
