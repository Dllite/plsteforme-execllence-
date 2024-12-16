"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function CultureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cultures = [
    {
      title: "240+ Ethnies",
      description: "Une diversité culturelle exceptionnelle qui fait la richesse du pays",
    },
    {
      title: "Langues",
      description: "Plus de 250 langues locales en plus du français et de l'anglais",
    },
    {
      title: "Traditions",
      description: "Des festivals et cérémonies traditionnelles uniques",
    },
  ];

  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
            Une Culture Riche et Diverse
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
            Le Cameroun est un véritable carrefour culturel
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cultures.map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}