import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { type ScheduleBlock, categoryStyles } from "./scheduleData";

interface ScheduleCardProps {
  block: ScheduleBlock;
  index: number;
}

const ScheduleCard = ({ block, index }: ScheduleCardProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03, duration: 0.3 }}
          className={`rounded-lg p-3 cursor-default transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${categoryStyles[block.category]}`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs font-medium text-muted-foreground">{block.time}</p>
              <p className="text-sm font-semibold text-foreground truncate">
                {block.emoji} {block.title}
              </p>
            </div>
            {block.duration && (
              <span className="text-[10px] font-medium text-muted-foreground bg-background/60 rounded-full px-2 py-0.5 whitespace-nowrap">
                {block.duration}
              </span>
            )}
          </div>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs text-sm">
        <p className="font-semibold">{block.emoji} {block.title}</p>
        <p className="text-muted-foreground mt-1">{block.tip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ScheduleCard;
