import { motion } from "framer-motion";

const stats = [
  { value: "47.2%", label: "Sea Ice Decline", description: "Average annual reduction in polar ice coverage since 1979" },
  { value: "+3.5°C", label: "Temperature Anomaly", description: "Arctic surface temperature increase over the last decade" },
  { value: "1.8M", label: "Species Impacted", description: "Wildlife populations affected by habitat loss and climate shifts" },
];

const StatsSection = () => {
  return (
    <section id="data" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold mb-4 text-foreground"
        >
          Key Arctic Indicators
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Critical measurements that reveal the accelerating transformation of Earth's polar regions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <div className={`text-5xl font-bold tabular-nums mb-4 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                {stat.value}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{stat.label}</h4>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
