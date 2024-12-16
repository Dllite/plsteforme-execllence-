import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { personalities } from "@/lib/data";
import { PersonalityContent } from "./personality-content";

export function generateStaticParams() {
  return Object.keys(personalities).map((slug) => ({
    slug,
  }));
}

export default function PersonnaliteDetail({
  params,
}: {
  params: { slug: string };
}) {
  const person = personalities[params.slug as keyof typeof personalities];

  if (!person) {
    return <div>Personnalité non trouvée</div>;
  }

  return <PersonalityContent person={person} />;
}