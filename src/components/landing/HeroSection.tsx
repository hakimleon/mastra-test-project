// src/components/landing/HeroSection.tsx
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center flex items-center justify-center pt-16" style={{ backgroundImage: 'url("/images/restaurant-hero.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-white text-center p-8 max-w-4xl">
        <h1 className="text-7xl md:text-8xl font-display font-extrabold tracking-tight mb-6 animate-fade-in-up">
          La Compagnie
        </h1>
        <p className="text-xl md:text-xl font-semibold mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Une symphonie de saveurs, un voyage culinaire inoubliable.
        </p>
        <Link href="#contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-10 rounded-full text-xl shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in-up delay-400">
          Réserver une table
        </Link>
      </div>
    </section>
  );
}
