import { motion } from "framer-motion";
import { Lightbulb, MessageSquareQuote, Palette, Megaphone } from "lucide-react";

const tips = [
  {
    icon: MessageSquareQuote,
    title: "Elevator Pitch",
    text: "Practica tu pitch de 30 segundos: quién eres, qué haces y qué te diferencia.",
    color: "bg-purple-light text-primary",
  },
  {
    icon: Palette,
    title: "Portafolio Visual",
    text: "Muestra proceso, no solo resultado. Los recruiters quieren ver cómo piensas.",
    color: "bg-coral-light text-secondary",
  },
  {
    icon: Megaphone,
    title: "LinkedIn Activo",
    text: "Publica 2-3 veces por semana. Comparte aprendizajes, no solo logros.",
    color: "bg-mint-light text-mint",
  },
  {
    icon: Lightbulb,
    title: "Storytelling",
    text: "En entrevistas, usa el método STAR: Situación, Tarea, Acción, Resultado.",
    color: "bg-amber-light text-amber",
  },
];

const BrandingTips = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-1">💡 Personal Branding Tips</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Consejos rápidos para brillar en tu búsqueda
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tips.map((tip, i) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="card-elevated rounded-xl p-5 group"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${tip.color}`}>
              <tip.icon size={20} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BrandingTips;
