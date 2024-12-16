import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Compass, Globe } from "lucide-react";

export default function Vision() {
  const visions = [
    {
      title: "Vision 2035",
      description: "Un Cameroun émergent, démocratique et uni dans sa diversité",
      icon: Target
    },
    {
      title: "Missions",
      description: "Développement économique, social et culturel durable",
      icon: Compass
    },
    {
      title: "Objectifs",
      description: "Industrialisation, modernisation et rayonnement international",
      icon: Globe
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Vision & Mission</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Notre Vision pour l'Avenir</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Le Cameroun s'engage dans une transformation profonde pour devenir
          un pays émergent à l'horizon 2035. Cette ambition se traduit par
          des objectifs concrets dans tous les secteurs de la société.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visions.map((vision) => (
          <Card key={vision.title}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <vision.icon className="h-5 w-5 mr-2" />
                {vision.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{vision.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Nos Engagements</h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul className="list-disc pl-6 space-y-4">
            <li>Renforcement de la démocratie et de la bonne gouvernance</li>
            <li>Développement des infrastructures et de l'industrialisation</li>
            <li>Modernisation de l'agriculture et de l'élevage</li>
            <li>Amélioration du système éducatif et de la formation</li>
            <li>Protection de l'environnement et développement durable</li>
          </ul>
        </div>
      </section>
    </div>
  );
}