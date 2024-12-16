"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { partnerships } from "@/lib/data";

export function PartnershipsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
            Partenariats Internationaux
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
            Le Cameroun entretient des relations diplomatiques et économiques fortes avec de nombreux pays
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {partnerships.map((partner) => (
            <motion.div key={partner.country} variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{partner.flag}</span>
                    {partner.country}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{partner.type}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-1">
                    {partner.domains.map((domain) => (
                      <li key={domain} className="text-sm text-muted-foreground">
                        {domain}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}