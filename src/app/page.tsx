import Image from 'next/image';
import Link from 'next/link';
import { RecipeCard } from '@/components/RecipeCard';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/landing" className="text-3xl font-extrabold text-gray-900 tracking-wider">
            La Compagnie
          </Link>
          <div className="space-x-8 hidden md:flex">
            <Link href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium">Accueil</Link>
            <Link href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium">Menu</Link>
            <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium">À Propos</Link>
            <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium">Contact</Link>
          </div>
          {/* Mobile menu icon - can be implemented with state for a toggle */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Menu Highlights Section */}
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

      {/* About Us Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16 text-gray-900 font-display">Où Nous Trouver</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="bg-white p-10 rounded-xl shadow-2xl text-left">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900 font-heading">Informations & Réservations</h3>
              <p className="text-gray-800 text-xl mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0A8.966 8.966 0 0122 12c0 7.732-7 14-10 14S2 19.732 2 12c0-3.374 1.48-6.402 3.896-8.583m6.104 14.077c.607.411 1.28.694 2 .813M12 11a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                <span className="font-bold">Adresse :</span> 123 Rue de la Gastronomie, 75001 Paris
              </p>
              <p className="text-gray-800 text-xl mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="font-bold">Téléphone :</span> +33 1 23 45 67 89
              </p>
              <p className="text-gray-800 text-xl mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-3 0V4a2 2 0 00-2-2H8a2 2 0 00-2 2v4m0 0l-4 4 4 4m-4-4h16m0 0l4 4-4 4M21 8h-3a2 2 0 01-2-2"></path></svg>
                <span className="font-bold">Email :</span> contact@lacompagnie.com
              </p>
              <h3 className="text-3xl font-semibold mt-8 mb-4 text-gray-900 font-heading">Heures d'Ouverture</h3>
              <p className="text-gray-800 text-xl mb-2">
                <span className="font-bold">Mardi - Samedi :</span> 12h00 - 14h00 | 19h00 - 22h30
              </p>
              <p className="text-gray-800 text-xl">
                <span className="font-bold">Dimanche - Lundi :</span> Fermé
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-2xl text-center">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900 font-heading">Réserver Votre Table</h3>
              <p className="text-gray-700 text-xl mb-8 leading-relaxed">
                Utilisez notre plateforme de réservation en ligne sécurisée pour garantir votre place, ou contactez-nous directement par téléphone.
              </p>
              <Link href="#" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                Réserver en ligne
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-6">&copy; {new Date().getFullYear()} La Compagnie. Tous droits réservés.</p>
          <div className="flex justify-center space-x-8 mt-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Image src="/images/facebook-icon.svg" alt="Facebook" width={30} height={30} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Image src="/images/instagram-icon.svg" alt="Instagram" width={30} height={30} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Image src="/images/twitter-icon.svg" alt="Twitter" width={30} height={30} />
            </Link>
          </div>
        </div>
      </footer>

      {/* Basic Custom CSS for animations and custom fonts (would ideally be in globals.css or tailwind.config.js) */}
     
    </div>
  );
}
