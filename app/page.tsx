"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Target, ChevronDown, Globe2 } from "lucide-react";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";
import { CultureSection } from "@/components/home/culture-section";
import { HistoryTimeline } from "@/components/home/history-timeline";
import { StatisticsSection } from "@/components/home/statistics-section";
import { PartnershipsSection } from "@/components/home/partnerships-section";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Globe2,
      title: "Diversité Géographique",
      description: "Des plages aux montagnes, en passant par la savane et la forêt équatoriale"
    },
    {
      icon: Users,
      title: "Richesse Culturelle",
      description: "Plus de 240 ethnies et langues, traditions ancestrales"
    },
    {
      icon: Target,
      title: "Vision 2035",
      description: "Un plan ambitieux pour un Cameroun émergent"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section avec Slider */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Cameroun Paysage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Bienvenue au Cameroun
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            L'Afrique en miniature : Une mosaïque de cultures, de paysages
            et d'opportunités
          </motion.p>
          <motion.div variants={fadeIn} className="space-x-4">
            <Button asChild size="lg" variant="default">
              <Link href="#discover">Explorer</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/personnalites">Nos Personnalités</Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Points forts */}
      <section id="discover" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <item.icon className="w-8 h-8 text-primary mb-4" />
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

      <CultureSection />
      <HistoryTimeline />
      <StatisticsSection />
      <PartnershipsSection />
    </div>
  );
}