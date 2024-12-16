"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function StatisticsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      title: "Population",
      value: "27M+",
      description: "d'habitants",
    },
    {
      title: "Superficie",
      value: "475,442",
      description: "km²",
    },
    {
      title: "PIB",
      value: "45.3B",
      description: "FCFA (2023)",
    },
    {
      title: "Régions",
      value: "10",
      description: "administratives",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}