import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduleCard from "./ScheduleCard";
import { schedule, days } from "./scheduleData";

const ScheduleGrid = () => {
  const [activeDay, setActiveDay] = useState("Lunes");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-1">📅 Rutina Semanal</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Time-blocking de Lunes a Viernes · 6:00 AM – 11:30 PM
      </p>

      {/* Mobile: Tabs */}
      <div className="block lg:hidden">
        <Tabs value={activeDay} onValueChange={setActiveDay}>
          <TabsList className="w-full grid grid-cols-5 mb-4">
            {days.map((day) => (
              <TabsTrigger key={day} value={day} className="text-xs">
                {day.slice(0, 3)}
              </TabsTrigger>
            ))}
          </TabsList>
          {days.map((day) => (
            <TabsContent key={day} value={day} className="space-y-2">
              {schedule.map((block, i) => (
                <ScheduleCard key={`${day}-${i}`} block={block} index={i} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4">
        {days.map((day) => (
          <div key={day}>
            <div className="text-center mb-3">
              <h3 className="font-semibold text-sm text-foreground">{day}</h3>
            </div>
            <div className="space-y-2">
              {schedule.map((block, i) => (
                <ScheduleCard key={`${day}-${i}`} block={block} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ScheduleGrid;
