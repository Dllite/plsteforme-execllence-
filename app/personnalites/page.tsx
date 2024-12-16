"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Personnalites() {
  const personalities = [
    {
      name: "Paul Biya",
      role: "Président de la République",
      description: "Président du Cameroun depuis 1982",
      image: "https://oeildhumanite.com/media/k2/items/cache/a58db2deb88133d8d82116fd2b40cd68_M.jpg",
      slug: "paul-biya"
    },
    {
      name: "Ahmadou Ahidjo",
      role: "Premier Président",
      description: "Premier président du Cameroun (1960-1982)",
      image: "https://kamerinfosplus.com/wp-content/uploads/2024/08/IMG-20240824-WA0279.jpg",
      slug: "ahmadou-ahidjo"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-7xl mx-auto py-12 px-4"
    >
      <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-8">
        Personnalités Politiques
      </motion.h1>

      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalities.map((person) => (
          <motion.div key={person.name} variants={fadeIn}>
            <Link href={`/personnalites/${person.slug}`}>
              <Card className="flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full md:w-48 h-48">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle>{person.name}</CardTitle>
                    <p className="text-muted-foreground">{person.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{person.description}</p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}