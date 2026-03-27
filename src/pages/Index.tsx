import HeroSection from "@/components/dashboard/HeroSection";
import ScheduleGrid from "@/components/dashboard/ScheduleGrid";
import BrandingTips from "@/components/dashboard/BrandingTips";
import CategoryLegend from "@/components/dashboard/CategoryLegend";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-8 space-y-10">
        <HeroSection />
        <CategoryLegend />
        <ScheduleGrid />
        <BrandingTips />
        <footer className="text-center text-xs text-muted-foreground pb-8 pt-4">
          Hecho con 💜 para una comunicadora que no para · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Index;
