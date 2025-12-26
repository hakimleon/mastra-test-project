// src/components/landing/AboutUsSection.tsx
import Image from 'next/image';

export function AboutUsSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <Image src="https://images.pexels.com/photos/35336025/pexels-photo-35336025.jpeg" alt="Intérieur élégant du restaurant La Compagnie" width={700} height={500} objectFit="cover" className="rounded-xl shadow-2xl" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-8 text-gray-900 font-display">Notre Histoire & Philosophie</h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-6">
            Fondé en 20XX par le Chef étoilé Antoine Dubois, "La Compagnie" est l'aboutissement d'un rêve : créer un lieu où la haute gastronomie rencontre la convivialité. Chaque plat est une œuvre d'art, préparée avec des ingrédients de saison, sourcés localement, et une passion inébranlable pour l'excellence.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed">
            Notre mission est d'offrir une expérience sensorielle unique, où chaque bouchée raconte une histoire et chaque visite est une célébration de la cuisine française moderne.
          </p>
        </div>
      </div>
    </section>
  );
}
