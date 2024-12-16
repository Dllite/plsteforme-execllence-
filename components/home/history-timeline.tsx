"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function HistoryTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      year: "1960",
      title: "Indépendance",
      description: "Le Cameroun obtient son indépendance",
    },
    {
      year: "1972",
      title: "République Unie",
      description: "Création de la République Unie du Cameroun",
    },
    {
      year: "1982",
      title: "Nouvelle Ère",
      description: "Paul Biya devient président de la République",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } mb-12`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <span className="text-2xl font-bold text-primary">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}