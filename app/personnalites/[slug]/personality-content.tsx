"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { personalities } from "@/lib/data";

type Person = typeof personalities[keyof typeof personalities];

export function PersonalityContent({ person }: { person: Person }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-7xl mx-auto py-12 px-4"
    >
      <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-[500px]">
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-4">{person.name}</h1>
          <p className="text-xl text-muted-foreground mb-2">{person.role}</p>
          <p className="text-lg text-muted-foreground mb-8">{person.period}</p>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Biographie</h2>
              <p className="text-muted-foreground">{person.biography}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Réalisations Majeures</h2>
              <ul className="list-disc pl-6 space-y-2">
                {person.achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Parcours</h2>
              <div className="space-y-4">
                {person.career.map((position, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <p className="font-semibold">{position.period}</p>
                    <p className="text-muted-foreground">{position.role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}