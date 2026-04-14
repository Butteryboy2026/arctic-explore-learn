import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import arcticHero from "@/assets/arctic-hero.jpg";

const HeroSection = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={arcticHero}
          alt="Arctic glacier landscape with icebergs"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-gradient-hero mb-8"
          >
            The Pulse of the North
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Witness the dynamic state of the Arctic through comprehensive data, 
            vivid imagery, and in-depth analysis. Understand the profound changes 
            shaping this critical ecosystem.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground glow-teal hover:bg-primary/90 font-semibold px-8">
              Begin Exploration
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
              View Data Hub
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
