import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Decouvrir() {
  const regions = [
    {
      name: "Adamaoua",
      description: "Région des hauts plateaux et de l'élevage traditionnel",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Centre",
      description: "Région de la capitale Yaoundé et du patrimoine culturel",
      image: "https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Est",
      description: "Région de la forêt équatoriale et de la biodiversité",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Découvrir le Cameroun</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Présentation</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Le Cameroun, surnommé "l'Afrique en miniature", est un pays d'une
          diversité exceptionnelle. Des montagnes aux plaines, des forêts
          tropicales aux savanes, découvrez un pays aux multiples facettes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Nos Régions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region) => (
            <Card key={region.name}>
              <CardHeader>
                <div className="relative h-48 mb-4">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle>{region.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{region.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}