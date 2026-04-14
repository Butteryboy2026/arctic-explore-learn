import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import arcticWildlife from "@/assets/arctic-wildlife.jpg";

const WildlifeSection = () => {
  return (
    <section id="wildlife" className="py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-primary/10 blur-2xl rounded-2xl" />
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border">
              <img
                src={arcticWildlife}
                alt="Polar bear on Arctic ice"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <h3 className="text-5xl font-bold leading-tight mb-8 text-foreground">
            A Realm of Resilience
          </h3>
          <p className="text-xl text-muted-foreground max-w-lg mb-6 leading-relaxed">
            The Arctic is home to remarkable species adapted to extreme conditions. 
            From the iconic polar bear to the elusive Arctic fox, these creatures 
            face unprecedented challenges as their frozen world transforms.
          </p>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Rising temperatures are shrinking sea ice habitats, disrupting food chains, 
            and forcing migrations into unfamiliar territories. Understanding these shifts 
            is crucial for conservation efforts.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
          >
            Discover Arctic Species
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WildlifeSection;
