import { motion } from "framer-motion";
import { TableProperties, Target, Sparkles, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl gradient-hero p-8 md:p-12 text-primary-foreground"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-50" />
      
      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium uppercase tracking-widest opacity-80 mb-2"
        >
          Buenos días, creativa ✨
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold leading-tight mb-4"
        >
          Tu semana tiene propósito.
          <br />
          <span className="opacity-80">Hazla contar.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-8 text-sm"
        >
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-4 py-2">
            <Target size={16} />
            <span>20 postulaciones / semana</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-4 py-2">
            <Sparkles size={16} />
            <span>Mora Taller: crear contenido</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-4 py-2">
            <Dog size={16} />
            <span>4 paseos diarios</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8 py-6 rounded-xl shadow-lg"
            onClick={() => window.open("https://docs.google.com/spreadsheets/d/1Cg3n30fTlccRlUjOdkKxtelNnLwlvqaAre5ta-9o-hQ/edit?usp=sharing", "_blank")}
          >
            <TableProperties className="mr-2" size={20} />
            Abrir Job Tracker (Google Sheets)
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
