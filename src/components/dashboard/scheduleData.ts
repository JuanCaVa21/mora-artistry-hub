export type CategoryKey = "dogs" | "morning" | "work" | "lunch" | "mora" | "home" | "tracker";

export interface ScheduleBlock {
  time: string;
  title: string;
  emoji: string;
  category: CategoryKey;
  tip: string;
  duration?: string;
}

export const categoryStyles: Record<CategoryKey, string> = {
  dogs: "category-dogs",
  morning: "category-morning",
  work: "category-work",
  lunch: "category-lunch",
  mora: "category-mora",
  home: "category-home",
  tracker: "category-tracker",
};

export const schedule: ScheduleBlock[] = [
  { time: "6:00 AM", title: "Paseo de Perros", emoji: "🐕", category: "dogs", tip: "Primer paseo del día. ¡Energía matutina!", duration: "30 min" },
  { time: "6:30 AM", title: "Sueño de Recuperacion", emoji: "🌅", category: "morning", tip: "Volver a dormir para aprovechar el sueño profundo", duration: "2.5 hr" },
  { time: "9:00 AM", title: "Rutina y Despertar", emoji: "🌅", category: "morning", tip: "Agua, skincare, planificar el día", duration: "30 min" },
  { time: "9:30 AM", title: "Aplicaciones 3 Publicadas + 1 Espontanea", emoji: "💼", category: "work", tip: "Enfocarse en calidad, no cantidad. Personalizar cada aplicación", duration: "1.5 hrs" },
  { time: "11:00 AM", title: "Tracker de Postulaciones", emoji: "💼", category: "work", tip: "Cuida el orden", duration: "15 min" },
  { time: "11:15 AM", title: "Descanso", emoji: "🌅", category: "lunch", tip: "Come algo para recuperar tus fuerzas", duration: "30 min" },
  { time: "11:30 AM", title: "Contenido Creativo", emoji: "🎨", category: "mora", tip: "Planificar y crear contenido para redes sociales", duration: "30 min" },
  { time: "12:00 PM", title: "Paseo de Perros", emoji: "🐕", category: "dogs", tip: "Segundo paseo del día. ¡Energía para ambos!", duration: "30 min" },
  { time: "12:30 PM", title: "Almuerzo y Descanso", emoji: "🥗", category: "lunch", tip: "Comer bien, hidratar, scroll consciente", duration: "1 hr" },
  { time: "1:30 PM", title: "Mora Taller: Estrategia", emoji: "🎨", category: "mora", tip: "Planificación de contenido para redes", duration: "1.5 hrs" },
  { time: "3:00 PM", title: "Mora Taller: Creación", emoji: "🎨", category: "mora", tip: "Diseñar piezas, grabar reels, escribir copies", duration: "2 hrs" },
  { time: "5:00 PM", title: "Tareas del Hogar", emoji: "🧹", category: "home", tip: "Limpiar, organizar, pendientes personales", duration: "1 hr" },
  { time: "6:00 PM", title: "Paseo de Perros", emoji: "🐕", category: "dogs", tip: "Tercer paseo. ¡Los peludos lo merecen!", duration: "30 min" },
  { time: "6:30 PM", title: "Descanso Personal", emoji: "🧹", category: "home", tip: "Tiempo libre: series, lectura, hobbies", duration: "2 hrs" },
  { time: "8:45 PM", title: "Preparar día siguiente", emoji: "📊", category: "tracker", tip: "Revisar ofertas guardadas para mañana", duration: "15 min" },
  { time: "9:00 PM", title: "Wind Down", emoji: "🧹", category: "home", tip: "Desconectar pantallas, rutina nocturna", duration: "2 hrs" },
  { time: "11:00 PM", title: "Paseo de Perros", emoji: "🐕", category: "dogs", tip: "Último paseo. Buenas noches 🌙", duration: "30 min" },
];

export const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
