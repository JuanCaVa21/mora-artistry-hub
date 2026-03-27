import { motion } from "framer-motion";

const categories = [
  { emoji: "🐕", label: "Paseo Perros", className: "category-dogs" },
  { emoji: "🌅", label: "Rutina", className: "category-morning" },
  { emoji: "💼", label: "Búsqueda", className: "category-work" },
  { emoji: "🥗", label: "Almuerzo", className: "category-lunch" },
  { emoji: "🎨", label: "Mora Taller", className: "category-mora" },
  { emoji: "🧹", label: "Hogar", className: "category-home" },
  { emoji: "📊", label: "Tracker", className: "category-tracker" },
];

const CategoryLegend = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="flex flex-wrap gap-2"
  >
    {categories.map((cat) => (
      <span
        key={cat.label}
        className={`text-xs font-medium rounded-full px-3 py-1.5 ${cat.className}`}
      >
        {cat.emoji} {cat.label}
      </span>
    ))}
  </motion.div>
);

export default CategoryLegend;
