// src/components/landing/MenuHighlightsSection.tsx
import { RecipeCard } from '@/components/RecipeCard';

export function MenuHighlightsSection() {
  return (
    <section id="menu" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-16 text-gray-900 font-display">Notre Carte</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <RecipeCard
            imageSrc="https://images.pexels.com/photos/35346360/pexels-photo-35346360.jpeg"
            altText="Plat Signature 1"
            title="Le Filet de Bœuf Rossini"
            description="Avec sa tranche de foie gras poêlé et sa sauce aux truffes noires, accompagné de gratin dauphinois."
            price="42 €"
          />
          <RecipeCard
            imageSrc="https://images.pexels.com/photos/35346308/pexels-photo-35346308.jpeg"
            altText="Plat Signature 2"
            title="Saint-Jacques Poêlées"
            description="Servies sur un lit de purée de petits pois à la menthe et une émulsion citronnée."
            price="35 €"
          />
          <RecipeCard
            imageSrc="https://images.pexels.com/photos/8694617/pexels-photo-8694617.jpeg"
            altText="Plat Signature 3"
            title="Tarte Tatin Revisée"
            description="Une tarte Tatin caramélisée, accompagnée de sa glace vanille de Madagascar."
            price="12 €"
          />
        </div>
      </div>
    </section>
  );
}
