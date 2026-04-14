import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const iceData = [
  { year: "1980", extent: 7.8 },
  { year: "1985", extent: 7.5 },
  { year: "1990", extent: 7.2 },
  { year: "1995", extent: 6.8 },
  { year: "2000", extent: 6.3 },
  { year: "2005", extent: 5.6 },
  { year: "2010", extent: 4.9 },
  { year: "2015", extent: 4.4 },
  { year: "2020", extent: 3.9 },
  { year: "2025", extent: 3.5 },
];

const tempData = [
  { year: "1980", anomaly: 0.2 },
  { year: "1985", anomaly: 0.4 },
  { year: "1990", anomaly: 0.6 },
  { year: "1995", anomaly: 0.9 },
  { year: "2000", anomaly: 1.2 },
  { year: "2005", anomaly: 1.7 },
  { year: "2010", anomaly: 2.1 },
  { year: "2015", anomaly: 2.6 },
  { year: "2020", anomaly: 3.1 },
  { year: "2025", anomaly: 3.5 },
];

const IceDataSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Track the Shifting Landscape
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive into detailed visualizations of ice extent, temperature anomalies, 
            and atmospheric changes across decades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-6 border border-border/50"
          >
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Arctic Sea Ice Extent
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              Million km² — September minimum average
            </p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={iceData}>
                <defs>
                  <linearGradient id="iceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(174, 60%, 56%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(174, 60%, 56%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="hsl(220, 15%, 40%)" fontSize={12} />
                <YAxis stroke="hsl(220, 15%, 40%)" fontSize={12} domain={[2, 9]} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(224, 40%, 14%)",
                    border: "1px solid hsl(220, 25%, 20%)",
                    borderRadius: "8px",
                    color: "hsl(220, 20%, 90%)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="extent"
                  stroke="hsl(174, 60%, 56%)"
                  fill="url(#iceGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-xl p-6 border border-border/50"
          >
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Temperature Anomaly
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              °C above 1951–1980 baseline
            </p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={tempData}>
                <defs>
                  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(217, 50%, 55%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(217, 50%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="hsl(220, 15%, 40%)" fontSize={12} />
                <YAxis stroke="hsl(220, 15%, 40%)" fontSize={12} domain={[0, 4]} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(224, 40%, 14%)",
                    border: "1px solid hsl(220, 25%, 20%)",
                    borderRadius: "8px",
                    color: "hsl(220, 20%, 90%)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="anomaly"
                  stroke="hsl(217, 50%, 55%)"
                  fill="url(#tempGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IceDataSection;
