import { motion } from "framer-motion";
import arcticIce from "@/assets/arctic-ice.jpg";
import arcticAurora from "@/assets/arctic-aurora.jpg";

const cards = [
  {
    image: arcticIce,
    title: "Melting Permafrost",
    description: "As temperatures rise, ancient permafrost thaws, releasing methane and CO₂ — potent greenhouse gases that accelerate warming in a dangerous feedback loop.",
  },
  {
    image: arcticAurora,
    title: "Northern Lights at Risk",
    description: "Climate change affects the magnetosphere and upper atmosphere, potentially altering the spectacular aurora borealis displays that illuminate polar skies.",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Understanding the Impact
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Arctic's transformation has far-reaching consequences for global 
            weather patterns, sea levels, and ecosystems worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-foreground mb-3">{card.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
