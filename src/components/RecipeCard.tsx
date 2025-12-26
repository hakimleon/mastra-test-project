// src/components/RecipeCard.tsx
import Image from 'next/image';

interface RecipeCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: string;
}

export function RecipeCard({ imageSrc, altText, title, description, price }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-orange-300/50">
      <Image src={imageSrc} alt={altText} width={600} height={400} objectFit="cover" className="w-full h-56 md:h-64 object-cover" />
      <div className="p-8">
        <h3 className="text-3xl font-semibold mb-3 text-gray-900 font-heading">{title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {description}
        </p>
        <p className="text-orange-600 font-extrabold text-2xl mt-4">{price}</p>
      </div>
    </div>
  );
}
